import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import "./style.css";

export const HomePsy = () => {
  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            <div className="">
              <h1>Tela de Psicologo</h1>
            </div>
          </Main>
        </Container>
      </Body>
    </>
  );
};
