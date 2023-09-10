import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import {
  Container,
  MainContainer,
} from "../../components/Layout/Container/style";
import Sidebar from "../../components/Layout/Sidebar";

export const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Sidebar />
      <Container>
        <MainContainer>
          <h2>Olá {auth.user?.name} </h2>
          <p>Voce esta logado</p>
        </MainContainer>
      </Container>
    </>
  );
};
