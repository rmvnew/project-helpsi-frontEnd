import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import "./style.css";

export const Scheduling = () => {
  return (
    <>
      <ContainerWrapper>
        <Header />
        <Container>
          <Main>
            <div className="">
              <h1>Tela de agendamento</h1>
            </div>
          </Main>
        </Container>
      </ContainerWrapper>
    </>
  );
};
