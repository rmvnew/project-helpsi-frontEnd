import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { SignInPsy } from "../../pages/Login/Psychologist/Signin";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  // Se estiver carregando, retorne null ou algum componente de loading
  if (auth.loading) {
    return null; // Ou retorne algum componente de "carregando", como um spinner.
  }

  // Se o usuário não estiver autenticado, exiba a tela de Login
  if (!auth.user) {
    return <SignInPsy/>;
  }

  // Se o usuário estiver autenticado, retorne o conteúdo principal
  return children;
};
