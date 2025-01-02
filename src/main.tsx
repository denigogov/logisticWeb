import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootRouter from "./router/RootRouter.tsx";
import "./i18n.ts";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootRouter />
  </StrictMode>
);
