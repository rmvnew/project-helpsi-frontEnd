import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Column, Details, HomePatient } from "./styled";
import { AppointmentTime } from "../../../components/Patient/appointmentTime";

export const Home = () => {
  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            <HomePatient>
              <Column>
                <Details>
                  <span>Detalhes da consulta</span>
                  <AppointmentTime />
                  <p>
                    Atenção ao sair do Consultório verificar se a porta está
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
    </>
  );
};
