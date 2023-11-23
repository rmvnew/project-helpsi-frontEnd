import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined"

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
                <CalendarMonthOutlinedIcon />
              </Link>
              <Link to="/psy/patients" className="card-data">
                Meus Pacientes
                <PeopleAltOutlinedIcon />
              </Link>
              <Link to="/psy/patient-diary" className="card-data">
                Diário de Emoções
                <MenuBookOutlinedIcon />
              </Link>
              <Link to="/psy/graphic" className="card-data">
                Gráfico de Emoções
                <SignalCellularAltOutlinedIcon  />
              </Link>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};
