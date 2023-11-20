import { Link } from "react-router-dom";

import logo from "../../../../assets/img/logo.svg";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";

import { Sidebar, SidebarLink } from "../styled";
import { SidebarPsyProps } from "../../../../interface/sidebar.interface";

const SidebarComponent: React.FC<SidebarPsyProps> = ({ isSidebarOpen }) => (
  <Sidebar open={isSidebarOpen}>
    <img src={logo} alt="logo da empresa" style={{ width: "150px" }} />
    <SidebarLink>
      <Link to="/psy/home">
        <HomeOutlinedIcon />
        Home
      </Link>
    </SidebarLink>

    <SidebarLink>
      <Link to="/psy/patients">
        <PeopleAltOutlinedIcon />
        Pacientes
      </Link>
    </SidebarLink>

    <SidebarLink>
      <Link to="/psy/schedule">
        <CalendarMonthOutlinedIcon />
        Minha Agenda
      </Link>
    </SidebarLink>

    <SidebarLink>
      <Link to="/psy/patient-diary">
        <MenuBookOutlinedIcon />
        Diários
      </Link>
    </SidebarLink>

    <SidebarLink>
      <Link to="/psy/graphic">
        <SignalCellularAltOutlinedIcon />
        Emoções
      </Link>
    </SidebarLink>
  </Sidebar>
);

export default SidebarComponent;
