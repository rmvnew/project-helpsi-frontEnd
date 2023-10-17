import { useEffect, useState } from "react";
import { SignIn } from "../../pages/Login/Signin";
import Unauthorized from "../../pages/Unauthorized";

export const RequireAuth = ({
  children,
  allowedProfiles = [],
}: {
  children: JSX.Element;
  allowedProfiles?: string[];
}) => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<string | null>(null);

  useEffect(() => {
    // Suponhamos que o perfil do usuário seja armazenado com a chave 'userProfile'
    const profile = localStorage.getItem("userProfile");
    setUserProfile(profile);
    setLoading(false);
  }, []);

  if (loading) {
    return null; // ou algum componente de loading
  }

  if (!userProfile) {
    return <SignIn />;
  }

  if (allowedProfiles.length && !allowedProfiles.includes(userProfile)) {
    // Você pode redirecionar para uma página de "Acesso Negado" ou qualquer outra
    // ação que você queira tomar quando um usuário não tem a permissão correta.
    return <Unauthorized/>;
  }

  return children;
};
