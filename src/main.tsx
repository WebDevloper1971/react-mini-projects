import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MyAppContextProvider } from "./context/MyAppContext.tsx";

createRoot(document.getElementById("root")!).render(
  <MyAppContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MyAppContextProvider>
);
