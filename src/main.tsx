import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App, ErrorBoundary } from "./app/App";
import { AtlasProvider } from "./app/AtlasProvider";
import "./styles.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AtlasProvider>
          <App />
        </AtlasProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
