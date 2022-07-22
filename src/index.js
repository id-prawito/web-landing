import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import { ThemeContextProvider } from "./config/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
