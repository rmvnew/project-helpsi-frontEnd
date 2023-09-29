import {
  Container,
  Main,
} from "../../../components/Layout/Container/ContainerHome/styled";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import "./style.css";

export const Schedule = () => {
  return (
    <>
      <Body>
        <Header />
        <Container>
          <Main>
            <div id="agenda">
              <div id="header">Minha Agenda</div>
              
              <div id="schedule">
                <div id="date">Sexta-feira, 29 de setembro</div>

                <div className="time-column">
                  <div className="time">08:00</div>
                  <div className="appointment">Paciente 1</div>
                </div>

                <div className="time-column">
                  <div className="time">09:00</div>
                  <div className="appointment">Paciente 2</div>
                </div>

                <div className="time-column">
                  <div className="time">10:00</div>
                  <div className="appointment"></div>
                </div>

                <div className="time-column">
                  <div className="time">11:00</div>
                  <div className="appointment"></div>
                </div>

                <div className="time-column">
                  <div className="time">12:00</div>
                  <div className="appointment"></div>
                </div>

                <div className="time-column">
                  <div className="time">13:00</div>
                  <div className="appointment"></div>
                </div>

                <div className="time-column">
                  <div className="time">14:00</div>
                  <div className="appointment"></div>
                </div>

                <div className="time-column">
                  <div className="time">15:00</div>
                  <div className="appointment"></div>
                </div>

                <div className="time-column">
                  <div className="time">16:00</div>
                  <div className="appointment"></div>
                </div>

                <div className="time-column">
                  <div className="time">17:00</div>
                  <div className="appointment"></div>
                </div>

                <div className="time-column">
                  <div className="time">18:00</div>
                  <div className="appointment"></div>
                </div>

                {/* Adicione outros intervalos de tempo conforme necessário */}
                
              </div>

              <div className="legend">
                <div className="legend-item">
                  <div className="legend-circle cancelled"></div>
                  Cancelado
                </div>
                <div className="legend-item">
                  <div className="legend-circle pending"></div>
                  Pendente
                </div>
                <div className="legend-item">
                  <div className="legend-circle confirmed"></div>
                  Confirmado
                </div>
              </div>
            </div>
          </Main>
        </Container>
      </Body>
    </>
  );
};