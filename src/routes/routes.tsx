import { Route, Routes } from "react-router-dom";
import { StartLogin } from "../pages/Login/Start";
import { Home } from "../pages/Home/Patient";
import { HomePsy } from "../pages/Home/Psychologist";
import { SignInPsy } from "../pages/Login/Psychologist/Signin";
import { SignUpPsy } from "../pages/Login/Psychologist/Signup";
import { SignIn } from "../pages/Login/Patient/Signin";
import { SignUp } from "../pages/Login/Patient/Signup";
import { ResetPass } from "../pages/Login/Recover/ResetPass";
import { RecoverPass } from "../pages/Login/Recover/RecoverPass";
import { Scheduling } from "../pages/Scheduling";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePsy />} />
      <Route path="/home" element={<Home />} />
      <Route path="/start-login" element={<StartLogin />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin-psy" element={<SignInPsy />} />
      <Route path="/signup-psy" element={<SignUpPsy />} />
      <Route path="/recover-pass" element={<RecoverPass />} />
      <Route path="/reset-pass" element={<ResetPass />} />
      <Route path="/scheduling" element={<Scheduling />} /> 
    </Routes>
  );
};
