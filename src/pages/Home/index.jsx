import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/login')
  };

  return (
    <>
      <h2>Olá {auth.user.name} </h2>
      <p>Voce esta logado</p>
      <button onClick={handleLogout}>Sair</button>
    </>
  );
};
