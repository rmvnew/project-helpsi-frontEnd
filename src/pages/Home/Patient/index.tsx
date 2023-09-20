import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";

export const Home = () => {
  return (
    <>
      <ContainerWrapper>
        <Container>
          <Main>
            <h1 style={{ color: "red" }}>Tela de Paciente</h1>
          </Main>
        </Container>
      </ContainerWrapper>
    </>
  );
};
