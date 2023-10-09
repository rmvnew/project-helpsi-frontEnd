import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <div>
        <App />
        <ToastContainer />
      </div>
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>

);
