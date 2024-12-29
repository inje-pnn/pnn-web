import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RootRoutes } from "./app/router/rootRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <RootRoutes>
        <App />
      </RootRoutes>
    </StrictMode>
  </BrowserRouter>
);
