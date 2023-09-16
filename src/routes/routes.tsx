import { Route, Routes } from "react-router-dom";

import { StartLogin } from "../pages/Login/Start";
import { HomePsy } from "../pages/Home/Psychologist";
import { RequireAuth } from "../contexts/auth/RequireAuth";
import { SignInPsy } from "../pages/Login/Psychologist/Signin";
import { RecoverPass } from "../pages/Login/Recover/RecoverPass";
import { SignUp } from "../pages/Login/Patient/Signup";
import { SignIn } from "../pages/Login/Patient/Signin";
import { Home } from "../pages/Home/Patient";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <HomePsy />
          </RequireAuth>
        }
      />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/start-login" element={<StartLogin />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin-psy" element={<SignInPsy />} />
      <Route path="/recover-pass" element={<RecoverPass />} />
    </Routes>
  );
};
