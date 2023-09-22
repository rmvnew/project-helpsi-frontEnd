import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Patient";
import { HomePsy } from "../pages/Home/Psychologist";
import { ResetPass } from "../pages/Login/Recover/ResetPass";
import { RecoverPass } from "../pages/Login/Recover/RecoverPass";
import { Scheduling } from "../pages/Scheduling";
import { SignIn } from "../pages/Login/Signin";
import { SignUp } from "../pages/Login/Signup";
import { RequireAuth } from "../contexts/auth/RequireAuth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home/:id"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/home/psy" element={<HomePsy />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login/recover-pass" element={<RecoverPass />} />
      <Route path="/login/reset-pass" element={<ResetPass />} />
      <Route path="/scheduling" element={<Scheduling />} />
    </Routes>
  );
};
