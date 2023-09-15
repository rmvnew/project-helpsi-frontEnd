import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/Login/Signup";
import { SignInPsy } from "../pages/Login/Psychologist/Signin";
import { SignIn } from "../pages/Login/Patient/Signin";
import { HomePsy } from "../pages/Home/Psychologist";
import { RequireAuth } from "../contexts/auth/RequireAuth";
import { StartLogin } from "../pages/Login/Start";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth><HomePsy /></RequireAuth>} />
      <Route path="/start-login" element={<StartLogin />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin-psy" element={<SignInPsy />} />
    </Routes>
  );
};
