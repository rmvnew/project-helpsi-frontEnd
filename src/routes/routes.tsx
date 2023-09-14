import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/Login/Signup";
import { SignInPsy } from "../pages/Login/Psychologist/Signin";
import { SignIn } from "../pages/Login/Patient/Signin";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin-psy" element={<SignInPsy />} />
    </Routes>
  );
};
