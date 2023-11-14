import { Route, Routes } from "react-router-dom";
import { ResetPass } from "../pages/Login/Recover/ResetPass";
import { RecoverPass } from "../pages/Login/Recover/RecoverPass";
import { SignIn } from "../pages/Login/Signin";
import SignUp from "../pages/Login/Signup";
import { RequireAuth } from "../contexts/auth/RequireAuth";
import { Home } from "../pages/Patient/Home";
import { HomePsy } from "../pages/Psychologist/Home";
import { Scheduling } from "../pages/Patient/Scheduling";
import { Patients } from "../pages/Psychologist/Patients";
import { Schedule } from "../pages/Psychologist/Schedule";
import { PatientData } from "../pages/Psychologist/Data";
import { Dashboard } from "../pages/Admin";
import NotFound from "../pages/NotFound";
import { ArchivedPatients } from "../pages/Psychologist/Patients/Arquived";
import { PatientDiary } from "../pages/Psychologist/PatientDiary";
import { ServiceReport } from "../pages/Psychologist/Report";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <RequireAuth allowedProfiles={["PATIENT"]}>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/psy/home"
        element={
          <RequireAuth allowedProfiles={["PSYCHOLOGIST"]}>
            <HomePsy />
          </RequireAuth>
        }
      />
      <Route
        path="/admin"
        element={
          <RequireAuth allowedProfiles={["ADMIN"]}>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/psy/patients"
        element={
          <RequireAuth allowedProfiles={["PSYCHOLOGIST"]}>
            <Patients />
          </RequireAuth>
        }
      />
      <Route
        path="/psy/schedule"
        element={
          <RequireAuth allowedProfiles={["PSYCHOLOGIST"]}>
            <Schedule />
          </RequireAuth>
        }
      />
      <Route
        path="/psy/patient-data"
        element={
          <RequireAuth allowedProfiles={["PSYCHOLOGIST"]}>
            <PatientData />
          </RequireAuth>
        }
      />

      <Route
        path="/scheduling"
        element={
          <RequireAuth allowedProfiles={["PATIENT"]}>
            <Scheduling />
          </RequireAuth>
        }
      />
      <Route
        path="/psy/arquived"
        element={
          <RequireAuth allowedProfiles={["PSYCHOLOGIST"]}>
            <ArchivedPatients />
          </RequireAuth>
        }
      />

      <Route
        path="/psy/patient-diary"
        element={
          <RequireAuth allowedProfiles={["PSYCHOLOGIST"]}>
            <PatientDiary />
          </RequireAuth>
        }
      />

      <Route
        path="/psy/service-report"
        element={
          <RequireAuth allowedProfiles={["PSYCHOLOGIST"]}>
            <ServiceReport />
          </RequireAuth>
        }
      />

      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login/recover-pass" element={<RecoverPass />} />
      <Route path="/login/reset-pass" element={<ResetPass />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
