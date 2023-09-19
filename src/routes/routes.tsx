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
      <Route path="/home/patient" element={<HomePsy />} />
      <Route path="/home/psy" element={<Home />} />
      <Route path="/" element={<StartLogin />} />
      <Route path="/login/recover-pass" element={<RecoverPass />} />
      <Route path="/login/reset-pass" element={<ResetPass />} />
      <Route path="/signin/patient" element={<SignIn />} />
      <Route path="/signup/patient" element={<SignUp />} />
      <Route path="/signin/psy" element={<SignInPsy />} />
      <Route path="/signup/psy" element={<SignUpPsy />} />
      <Route path="/scheduling" element={<Scheduling />} />
    </Routes>
  );
};
