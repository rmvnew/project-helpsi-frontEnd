import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Start from "./components/pages/start/start";
import Login from "./components/pages/login/login";
import Registry from "./components/pages/registry/registry";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Start/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registry",
        element: <Registry />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
