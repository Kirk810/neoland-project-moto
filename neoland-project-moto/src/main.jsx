import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserContextProvider from "./context/Context";
import ProviderLanguage from "./context/LanguageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProviderLanguage>
          <App />
        </ProviderLanguage>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
