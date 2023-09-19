import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";
import "./style.css";

export const HomePsy = () => {
  return (
    <>
      <ContainerWrapper>
        <Container>
          <Main>
            <div className="">
              <h1>Tela de Psicologo</h1>
            </div>
          </Main>
        </Container>
      </ContainerWrapper>
    </>
  );
};
