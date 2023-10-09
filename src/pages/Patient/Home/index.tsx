import { Container } from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Btn, Column, Details, HomePatient } from "./styled";
import { AppointmentTime } from "./AppointmentTime";
import { Link } from "react-router-dom";
import EmotionsDiary from "./EmotionsDiary";

export const Home = () => {
  return (
    <Body>
      <Header />
      <Container>
        <h2 style={{ color: "#594f4f", marginTop: "20px" }}>
          Consultas marcadas
        </h2>

        <HomePatient>
          <Column>
            <Details>
              <AppointmentTime />
            </Details>
            <Btn>
              <Link to="/scheduling">Nova consulta</Link>
            </Btn>
          </Column>
          <Column>
            <Details>
              <EmotionsDiary />
            </Details>
            <Btn>Salvar</Btn>
          </Column>
        </HomePatient>
      </Container>
    </Body>
  );
};
