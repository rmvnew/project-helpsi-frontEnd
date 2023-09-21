import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { SignIn } from "../../pages/Login/Signin";


export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (auth.loading) {
    return null;
  }

  if (!auth.user) {
    return <SignIn/>;
  }

  return children;
};
