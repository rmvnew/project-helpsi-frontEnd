import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import { Btn, Column, Container, Details, HomePatient } from "./styled";
import { AppointmentTime } from "./AppointmentTime";
import { Link } from "react-router-dom";
import EmotionsDiary from "./EmotionsDiary";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { getFirstNameFormatted } from "../../../common/functions/formatString";

export const Home = () => {
  const auth = useContext(AuthContext);
  const formattedName = getFirstNameFormatted(auth.user?.name ?? "");
  return (
    <Body>
      <Header />

      <Container>
        <h2 className="title_appointments">
          {`Seu bem-estar é nossa prioridade, ${formattedName}. Lembre-se de
            suas consultas.`}
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
