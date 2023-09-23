import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Sidebar, SidebarLink } from "../styled";
import { ScheduleLink } from "../../Header/patient/schedule";
import { SidebarPatientProps } from "../../../../interface/sidebar.interface";
import { DailyLink } from "../../Header/patient/daily";
import { SubItemsWrapper } from "../SubItemsWrapper";

const SidebarComponent: React.FC<SidebarPatientProps> = ({
  isSidebarOpen,
  isScheduleExpanded,
  isDailyExpanded,
  toggleSchedule,
  toggleDaily,
}) => (
  <Sidebar open={isSidebarOpen}>
    
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

    <SubItemsWrapper visible={isScheduleExpanded}>
      <Link to="/">Online</Link>
      <Link to="/">Presencial</Link>
    </SubItemsWrapper>

    <SidebarLink>
      <DailyLink isDailyExpanded={isDailyExpanded} toggleDaily={toggleDaily} />
    </SidebarLink>

    <SubItemsWrapper visible={isDailyExpanded}>
      <Link to="/">Histórico</Link>
    </SubItemsWrapper>
  </Sidebar>
);

export default SidebarComponent;
