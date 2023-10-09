import {
  Container,
  Main
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import "./style.css";
import icon1 from "../../../assets/icons/Google_Calendar.svg";
import icon2 from "../../../assets/icons/Health_Checkup.svg";
import icon3 from "../../../assets/icons/Journal.svg";
import icon4 from "../../../assets/icons/Google_Docs.svg";
import icon5 from "../../../assets/icons/Forward _Arrow.svg";

export const HomePsy = () => {
  return (
    <>
            <Body>
        <Header />
        <Container>
          <Main>
            <div className="corpo">
              <div className="container1 center-container1">
                <div className="card card1">
                  <img className="icones" src={icon1} alt="google calender" />
                  <h1 className="h1">Minha Agenda</h1>
                </div>

                <div className="card card2">
                 
                  <img className="icones" src={icon2} alt="Helth checkup" />
                  <h1 className="h1">Meus Pacientes</h1>
                </div>

                <div className="card card3">
                  
                  <img className="icones" src={icon3} alt="Diário de Emoções" />
                  <h1 className="h1">Diário de Emoções</h1>
                </div>
              </div> {/* container1 */}

              <div className="container2">
                <div className="card card4">
                  
                  <img className="icones" src={icon4} alt="Documentos" />
                  <h1 className="h1">Documentos</h1>
                </div>

                <div className="card card5">
                  <img className="icones" src={icon5} alt="Encaminhamentos" />
                  <h1 className="h1">Encaminhamentos</h1>
                </div>
              </div> {/* container2 */}
            </div>
          </Main>
        </Container>
      </Body>
    </>
  );
};
