import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./containers/Layout";

import "./index.css";
import App from "./routes/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
