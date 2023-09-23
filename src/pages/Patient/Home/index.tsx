import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Column, Details, HomePatient } from "./styled";

export const Home = () => {
  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            <HomePatient>
              <Column>
                <Details></Details>
              </Column>
              <Column></Column>
            </HomePatient>
          </Main>
        </Container>
      </Body>
    </>
  );
};
