import "@testing-library/jest-dom/vitest";
import "fake-indexeddb/auto";
import { cleanup, configure } from "@testing-library/react";
import { afterEach } from "vitest";
Object.defineProperty(window, "scrollTo", { value: () => {}, writable: true });
afterEach(cleanup);
configure({ asyncUtilTimeout: 5000 });
