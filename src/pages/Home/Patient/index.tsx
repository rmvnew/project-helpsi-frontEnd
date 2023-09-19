import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";
import "./style.css";

export const Home = () => {
  return (
    <>
      <ContainerWrapper>
        
        <Container>
          <Main>
            <div className="">
              <h1>Tela de Paciente</h1>
            </div>
          </Main>
        </Container>
      </ContainerWrapper>
    </>
  );
};
