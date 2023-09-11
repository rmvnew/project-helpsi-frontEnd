import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Signin";
import CheckCode from "../pages/Login/CheckCode";
import { Home } from "../pages/Home";
import { RequireAuth } from "../contexts/auth/RequireAuth";

import { SignUp } from "../pages/Login/Signup";
import { RecoverPass } from "../pages/Login/RecoverPassword";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkCode" element={<CheckCode />} />
      <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
      <Route path="/recoverpass" element={<RecoverPass />} />
    </Routes>
  );
};
