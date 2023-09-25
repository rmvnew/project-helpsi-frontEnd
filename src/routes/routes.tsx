import { Route, Routes } from "react-router-dom";
import { ResetPass } from "../pages/Login/Recover/ResetPass";
import { RecoverPass } from "../pages/Login/Recover/RecoverPass";
import { SignIn } from "../pages/Login/Signin";
import { SignUp } from "../pages/Login/Signup";
import { RequireAuth } from "../contexts/auth/RequireAuth";
import { Home } from "../pages/Patient/Home";
import { HomePsy } from "../pages/Psychologist/Home";
import { Scheduling } from "../pages/Patient/Scheduling";
import { Patients } from "../pages/Psychologist/Patients";
import { Schedule } from "../pages/Psychologist/Schedule";
import { PatientData } from "../pages/Psychologist/Data";
import Dashboard from "../pages/Admin";

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
      <Route
        path="/psy/home/:id"
        element={
          <RequireAuth>
            <HomePsy />
          </RequireAuth>
        }
      />
      <Route
        path="/admin/:id"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/psy/patients"
        element={
          <RequireAuth>
            <Patients />
          </RequireAuth>
        }
      />
      <Route
        path="/psy/schedule"
        element={
          <RequireAuth>
            <Schedule />
          </RequireAuth>
        }
      />
      <Route
        path="/psy/patient-data"
        element={
          <RequireAuth>
            <PatientData />
          </RequireAuth>
        }
      />

      <Route
        path="/scheduling"
        element={
          <RequireAuth>
            <Scheduling />
          </RequireAuth>
        }
      />

      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login/recover-pass" element={<RecoverPass />} />
      <Route path="/login/reset-pass" element={<ResetPass />} />
    </Routes>
  );
};
