import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import "./style.css";

export const PatientData = () => {
  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            <div className="">
              <h1>Dados do Paciente</h1>
            </div>
          </Main>
        </Container>
      </Body>
    </>
  );
};
