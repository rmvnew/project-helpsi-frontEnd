import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EventIcon from "@mui/icons-material/Event";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

import { Sidebar, SidebarLink } from "../styled";
import { SidebarPatientProps } from "../../../../interface/sidebar.interface";

const SidebarComponent: React.FC<SidebarPatientProps> = ({ isSidebarOpen }) => (
  <Sidebar open={isSidebarOpen}>
    <SidebarLink>
      <Link to="/home">
        <HomeOutlinedIcon />
        Home
      </Link>
    </SidebarLink>

    <SidebarLink>
      <Link to="/scheduling">
        <EventIcon /> Agendar
      </Link>
    </SidebarLink>

    <SidebarLink>
      <Link to="/diary-list">
        <AutoStoriesOutlinedIcon /> Meus diários
      </Link>
    </SidebarLink>
  </Sidebar>
);

export default SidebarComponent;
