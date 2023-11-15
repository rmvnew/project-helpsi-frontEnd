import "./style.css";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import { Link } from "react-router-dom";

export const PatientDiary = () => {
  return (
    <>
      <Body>
        <Header />
        <div className="diary-container">
          <div className="align">
            <h2 className="diary-title">Diário dos Pacientes</h2>
            <Link to="/psy/graphic" className="view-button">Gráfico de emoções</Link>
          </div>

          <div className="content-container grid-container">
            {/* Card 1 */}
            <div className="card">
              <h3>Nome do Paciente 1</h3>
              <p className="date-info">Escrito dia DD/MM/AAAA</p>
              <p className="date-text">Última edição em DD/MM/AAAA</p>
              <button className="view-button">Visualizar</button>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h3>Nome do Paciente 2</h3>
              <p className="date-info">Escrito dia DD/MM/AAAA</p>
              <p className="date-text">Última edição em DD/MM/AAAA</p>
              <button className="view-button">Visualizar</button>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h3>Nome do Paciente 3</h3>
              <p className="date-info">Escrito dia DD/MM/AAAA</p>
              <p className="date-text">Última edição em DD/MM/AAAA</p>
              <button className="view-button">Visualizar</button>
            </div>

            {/* Card 4 */}
            <div className="card">
              <h3>Nome do Paciente 4</h3>
              <p className="date-info">Escrito dia DD/MM/AAAA</p>
              <p className="date-text">Última edição em DD/MM/AAAA</p>
              <button className="view-button">Visualizar</button>
            </div>

            {/* Card 5 */}
            <div className="card">
              <h3>Nome do Paciente 5</h3>
              <p className="date-info">Escrito dia DD/MM/AAAA</p>
              <p className="date-text">Última edição em DD/MM/AAAA</p>
              <button className="view-button">Visualizar</button>
            </div>

            {/* Card 6 */}
            <div className="card">
              <h3>Nome do Paciente 6</h3>
              <p className="date-info">Escrito dia DD/MM/AAAA</p>
              <p className="date-text">Última edição em DD/MM/AAAA</p>
              <button className="view-button">Visualizar</button>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};
