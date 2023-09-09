import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  MainContainer,
} from "../../components/Layout/Container/style";

export const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate("/login");
  };

  return (
    <>
      <Container>
        <MainContainer>
          <h2>Olá {auth.user?.name} </h2>
          <p>Voce esta logado</p>
          <button onClick={handleLogout}>Sair</button>
        </MainContainer>
      </Container>
    </>
  );
};
