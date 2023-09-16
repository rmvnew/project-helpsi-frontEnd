import { Container, Main } from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";
import { HeaderWrapper } from "../../../components/Layout/Header";
import Sidebar from "../../../components/Layout/Sidebar/Psychologist";

export const HomePsy = () => {
  return (
    <>
      <ContainerWrapper>
        <Sidebar />
        <Container>
          <HeaderWrapper />
          <Main>
            <h1 style={{ color: "red" }}>Tela de Psicologo</h1>
          </Main>
        </Container>
      </ContainerWrapper>
    </>
  );
};
