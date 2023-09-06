import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Start from "./components/pages/Start";
import Login from "./components/pages/Login";
import Registry from "./components/pages/Registry";
import Home from "./components/pages/Home";



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
      {
        path: "/home",
        element: <Home />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
