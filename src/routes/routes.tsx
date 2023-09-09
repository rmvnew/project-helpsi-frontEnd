import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { Registry } from "../pages/Registry";
import CheckCode from "../pages/CheckCode";
import { Home } from "../pages/Home";
import { RecoverPass } from "../pages/RecoverPassword";
import { RequireAuth } from "../contexts/auth/RequireAuth";
import Sidebar from "../components/Layout/Sidebar";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/registry" element={<Registry />} />
      <Route path="/CheckCode" element={<CheckCode />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/recoverpass" element={<RecoverPass />} />
      <Route path="/sidebar" element={<Sidebar />} />
    </Routes>
  );
};
