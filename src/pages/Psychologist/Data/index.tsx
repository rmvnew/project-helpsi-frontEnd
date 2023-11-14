import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import "./style.css";
import Notes from "../../../assets/icons/icon _note_.svg";
import Task from "../../../assets/icons/icon _task square_.svg";
import People from "../../../assets/icons/icon _people_.svg";
import Personal from "../../../assets/icons/icon _personalcard_.svg";
import Coin from "../../../assets/icons/icon _usd coin_.svg";
import Tick from "../../../assets/icons/icon _user tick_.svg";
import Warning from "../../../assets/icons/icon _warning_.svg";
import { Link } from "react-router-dom";

export const PatientData = () => {
  return (
    <>
      <Body>
        <Header />

        <div className="main-container">
          <div className="container">
            <div className="grid">
              <Link to="/psy/service-report" className="card-data">
                Relatório de atendimento
                <img src={Task} alt="notes" className="icon" />
              </Link>
              <Link to="#" className="card-data">
                Laudo
                <img src={Personal} alt="notes" className="icon" />
              </Link>
              <Link to="#" className="card-data">
                Declaração
                <img src={Notes} alt="notes" className="icon" />
              </Link>
              <Link to="#" className="card-data">
                Encaminhamentos
                <img src={Tick} alt="notes" className="icon" />
              </Link>
              <Link to="#" className="card-data">
                Recibos
                <img src={Coin} alt="notes" className="icon" />
              </Link>
              <Link to="#" className="card-data">
                Histórico do Diário
                <img src={People} alt="notes" className="icon" />
              </Link>
            </div>
            <Link to="#" className="single-card">
              Observações
              <img src={Warning} alt="notes" className="icon" />
            </Link>
          </div>
        </div>
      </Body>
    </>
  );
};
