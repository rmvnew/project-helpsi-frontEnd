import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";

export const HomePsy = () => {
  return (
    <>
      <ContainerWrapper>
        <Container>
          <Main>
            <h1 style={{ color: "red" }}>Tela de Psicologo</h1>
          </Main>
        </Container>
      </ContainerWrapper>
    </>
  );
};
