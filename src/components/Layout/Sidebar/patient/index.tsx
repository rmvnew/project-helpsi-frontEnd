import { Link } from "react-router-dom";

import logo from "../../../../assets/img/logo.svg";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import { Sidebar, SidebarLink, SubItems } from "../styled";
import { ScheduleLink } from "../../Header/patient/schedule";
import { SidebarPatientProps } from "../../../../interface/sidebar.interface";
import { DailyLink } from "../../Header/patient/daily";

const SidebarComponent: React.FC<SidebarPatientProps> = ({
  isSidebarOpen,
  isScheduleExpanded,
  isDailyExpanded,
  toggleSchedule,
  toggleDaily,
}) => (
  <Sidebar isOpen={isSidebarOpen}>
    <img src={logo} alt="logo da empresa" style={{ width: "150px" }} />
    <SidebarLink>
      <Link to="/">
        <HomeOutlinedIcon />
        Home
      </Link>
    </SidebarLink>

    <SidebarLink>
      <ScheduleLink
        isScheduleExpanded={isScheduleExpanded}
        toggleSchedule={toggleSchedule}
      />
    </SidebarLink>

    <SubItems isVisible={isScheduleExpanded}>
      <Link to="/">Online</Link>
      <Link to="/">Presencial</Link>
    </SubItems>

    <SidebarLink>
      <DailyLink isDailyExpanded={isDailyExpanded} toggleDaily={toggleDaily} />
    </SidebarLink>

    <SubItems isVisible={isDailyExpanded}>
      <Link to="/">Histórico</Link>
      
    </SubItems>
  </Sidebar>
);

export default SidebarComponent;
