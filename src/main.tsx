import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./index.scss"
import App from "./App";
import AuthProvider from "./routes/Auth";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
