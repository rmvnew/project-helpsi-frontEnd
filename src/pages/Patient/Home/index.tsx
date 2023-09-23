import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { ContainerWrapper } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Column, HomePatient } from "./styled";

export const Home = () => {
  return (
    <>
      <ContainerWrapper>
        <Header />
        <Container>
          <Main>
            <HomePatient>
              <Column></Column>
              <Column></Column>
            </HomePatient>
          </Main>
        </Container>
      </ContainerWrapper>
    </>
  );
};
