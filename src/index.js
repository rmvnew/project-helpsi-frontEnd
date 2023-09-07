import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import { CheckCode } from "./components/pages/CheckCode";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import { RecoverPass } from "./components/pages/RecoverPassword";
import { Registry } from "./components/pages/Registry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/registry",
        element: <Registry />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/recoverPassword",
        element: <RecoverPass />,
      },
      {
        path: "/checkcode",
        element: <CheckCode />,
      },
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
