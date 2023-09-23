import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import "./style.css";

export const Schedule= () => {
  return (
    <>
      <ContainerWrapper>
        <Container>
          <Header />
          <Main>
            <div className="">
              <h1>Agenda do Psicologo</h1>
            </div>
          </Main>
        </Container>
      </ContainerWrapper>
    </>
  );
};
