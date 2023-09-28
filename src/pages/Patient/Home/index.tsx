import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Column, Details, HomePatient } from "./styled";
import { AppointmentTime } from "../../../components/Patient/AppointmentTime";

export const Home = () => {
  return (
    <Body>
      <Header />
      <Container>
        <Main>
          <HomePatient>
            <Column>
              <Details>
                <h2>Detalhes da consulta</h2>
                <AppointmentTime />
                <p>
                  Atenção ao sair do Consultório: verifique se a porta está
                  fechada.
                </p>
              </Details>
            </Column>
            <Column>
              <Details></Details>
            </Column>
          </HomePatient>
        </Main>
      </Container>
    </Body>
  );
};
