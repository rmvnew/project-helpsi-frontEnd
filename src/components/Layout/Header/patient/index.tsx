import React, { useState } from "react";
import { UserProfileSection } from "../userProfile";
import logo from "../../../../assets/img/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { HeaderContainer, Logo, MenuButton } from "../styled";
import SidebarComponent from "../../Sidebar/patient";

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScheduleExpanded, setScheduleExpanded] = useState(false);
  const [isDailyExpanded, setDailyExpanded] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleSchedule = () => setScheduleExpanded(!isScheduleExpanded);
  const toggleDaily = () => setDailyExpanded(!isDailyExpanded);

  return (
    <>
      <HeaderContainer>
        <MenuButton onClick={toggleSidebar}>
          <MenuIcon />
        </MenuButton>
        <Logo src={logo} alt="Logo da empresa" />
        <UserProfileSection />
      </HeaderContainer>

      <SidebarComponent
        isSidebarOpen={isSidebarOpen}
        isScheduleExpanded={isScheduleExpanded}
        isDailyExpanded={isDailyExpanded}
        toggleSchedule={toggleSchedule}
        toggleDaily={toggleDaily}
      />
    </>
  );
};

export default Header;
