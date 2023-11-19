import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import "./style.css";
import Task from "../../../assets/icons/icon _task square_.svg";
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
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};
