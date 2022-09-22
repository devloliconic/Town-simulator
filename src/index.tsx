import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "styles/globalStyles";

import "normalize.css";
import App from "./App";
import "antd/dist/antd.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
