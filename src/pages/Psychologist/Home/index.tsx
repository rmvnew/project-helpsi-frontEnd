import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import icon1 from "../../../assets/icons/Google_Calendar.svg";
import icon2 from "../../../assets/icons/Health_Checkup.svg";
import icon3 from "../../../assets/icons/Journal.svg";
import { Link } from "react-router-dom";

export const HomePsy = () => {
  return (
    <>
      <Body>
        <Header />

        <div className="main-container">
          <div className="container">
            <div className="grid">
              <Link to="/psy/schedule" className="card-data">
                Minha Agenda
                <img src={icon1} alt="google calender" className="icon" />
              </Link>
              <Link to="/psy/patients" className="card-data">
                Meus Pacientes
                <img src={icon2} alt="Helth checkup" className="icon" />
              </Link>
              <Link to="/psy/patient-diary" className="card-data">
                Diário de Emoções
                <img src={icon3} alt="Diário de Emoções" className="icon" />
              </Link>
          
            </div>
          </div>
        </div>
        
      </Body>
    </>
  );
};
