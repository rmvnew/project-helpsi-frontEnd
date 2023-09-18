import {
  Container,
  Main,
} from "../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../components/Layout/Container/style";
import { HeaderWrapper } from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar/Patient";
import "./style.css";

export const Scheduling = () => {
  return (
    <>
      <ContainerWrapper>
        <Sidebar />
        <HeaderWrapper />
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
