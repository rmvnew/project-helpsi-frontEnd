import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import "./style.css";
import icon1 from "../../../assets/icons/Google_Calendar.svg";
import icon2 from "../../../assets/icons/Health_Checkup.svg";
import icon3 from "../../../assets/icons/Journal.svg";
import icon4 from "../../../assets/icons/Google_Docs.svg";
import icon5 from "../../../assets/icons/Forward _Arrow.svg";
import { Link } from "react-router-dom";

export const HomePsy = () => {
  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            <div className="corpo">
              <div className="container1 center-container1">
                <Link to="/psy/schedule" className="card card1">
                  <img className="icones" src={icon1} alt="google calender" />

                  <span className="link"> Minha Agenda</span>
                </Link>

                <Link to="/psy/patients" className="card card2">
                  <img className="icones" src={icon2} alt="Helth checkup" />
                  <span className="link"> Meus Pacientes</span>
                </Link>

                <Link to="/daily" className="card card3">
                  <img className="icones" src={icon3} alt="Diário de Emoções" />

                  <span className="link">Diário de Emoções</span>
                </Link>
              </div>

              <div className="container2">
                <Link to="/documents" className="card card4">
                  <img className="icones" src={icon4} alt="Documentos" />

                  <span className="link">Documentos</span>
                </Link>

                <Link to="/encaminhamentos" className="card card5">
                  <img className="icones" src={icon5} alt="Encaminhamentos" />
                  <span className="link">Encaminhamentos</span>
                </Link>
              </div>
            </div>
          </Main>
        </Container>
      </Body>
    </>
  );
};
