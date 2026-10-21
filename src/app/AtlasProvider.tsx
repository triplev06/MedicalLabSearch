import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db, defaultPreferences } from "../storage/db";
import { preferencesSchema, recordSchema } from "../domain/schemas";
import { setPreferences } from "../storage/tracking";
import type { ApplicationRecord, Preferences } from "../domain/types";
type AtlasState = {
  records: ApplicationRecord[];
  prefs: Preferences;
  now: Date;
  error: string;
  notice: string;
  act: (fn: () => Promise<unknown>, message?: string) => Promise<boolean>;
  updatePrefs: (patch: Partial<Preferences>) => Promise<boolean>;
};
const Context = createContext<AtlasState | null>(null);
export function AtlasProvider({ children }: { children: ReactNode }) {
  const [error, setError] = useState(""),
    [notice, setNotice] = useState(""),
    [now, setNow] = useState(() => new Date());
  const data = useLiveQuery(async () => {
    try {
      return {
        records: (await db.records.toArray()).map((r) => recordSchema.parse(r)),
        prefs: preferencesSchema.parse(
          (await db.preferences.get("main")) ?? defaultPreferences,
        ),
        error: "",
      };
    } catch {
      return {
        records: [],
        prefs: defaultPreferences,
        error:
          "Browser storage could not be read. Enable site storage and reload; your saved data has not been reset.",
      };
    }
  });
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
  const prefs = data?.prefs ?? defaultPreferences;
  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const apply = () => {
      document.documentElement.dataset.theme =
        prefs.theme === "system"
          ? media?.matches
            ? "dark"
            : "light"
          : prefs.theme;
    };
    apply();
    media?.addEventListener("change", apply);
    return () => media?.removeEventListener("change", apply);
  }, [prefs.theme]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 4000);
    return () => clearTimeout(timer);
  }, [notice]);
  async function act(fn: () => Promise<unknown>, message = "") {
    try {
      await fn();
      setError("");
      setNotice(message);
      return true;
    } catch (e) {
      console.error("Research Atlas storage operation failed", e);
      setError(
        "Changes could not be saved. Check browser storage and try again. Your existing records have not been reset.",
      );
      return false;
    }
  }
  const updatePrefs = (patch: Partial<Preferences>) =>
    act(async () => {
      await db.transaction("rw", db.preferences, async () => {
        await setPreferences({
          ...((await db.preferences.get("main")) ?? defaultPreferences),
          ...patch,
          id: "main",
        });
      });
    });
  if (!data)
    return (
      <div className="loading" role="status">
        Opening your research workspace…
      </div>
    );
  return (
    <Context.Provider
      value={{
        records: data.records,
        prefs,
        now,
        error: error || data.error,
        notice,
        act,
        updatePrefs,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function useAtlas() {
  const c = useContext(Context);
  if (!c) throw new Error("Missing AtlasProvider");
  return c;
}
