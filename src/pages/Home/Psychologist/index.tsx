import { Container, Main } from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";
import { HeaderWrapper } from "../../../components/Layout/Header";
import SidebarPsy from "../../../components/Layout/Sidebar/Psychologist";
import "./style.css";

export const HomePsy = () => {
  return (
    <>
      <ContainerWrapper>
        <SidebarPsy />
        <Container>
          <HeaderWrapper />
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
