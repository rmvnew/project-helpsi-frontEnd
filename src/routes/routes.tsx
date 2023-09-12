import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Signin";
import { RequireAuth } from "../contexts/auth/RequireAuth";
import { SignUp } from "../pages/Login/Signup";
import RecoverPass from "../pages/Login/RecoverPass";
import ResetPass from "../pages/Login/ResetPass";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resetPass" element={<ResetPass/>} />
      <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
      <Route path="/recoverpass" element={<RecoverPass />} />
    </Routes>
  );
};
