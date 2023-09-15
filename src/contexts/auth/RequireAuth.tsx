import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { StartLogin } from "../../pages/Login/Start";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (auth.loading) {
    return null;
  }

  if (!auth.user) {
    return <StartLogin />;
  }

  return children;
};
