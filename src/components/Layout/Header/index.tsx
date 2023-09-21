import React, { useState, useEffect } from "react";
import { UserProfileSection } from "./userProfile";
import SidebarComponent from "../Sidebar";
import logo from "../../../assets/img/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { HeaderContainer, Logo, MenuButton, RightSection } from "./styled";

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 998);
  const [isProntuarioExpanded, setProntuarioExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 998);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleProntuario = () => setProntuarioExpanded(!isProntuarioExpanded);

  return (
    <>
      <HeaderContainer>
        <MenuButton onClick={toggleSidebar}>
          <MenuIcon />
        </MenuButton>
        <Logo src={logo} alt="Logo da empresa" />
        <RightSection>
          <UserProfileSection />
        </RightSection>
      </HeaderContainer>

      <SidebarComponent
        isSidebarOpen={isSidebarOpen}
        isProntuarioExpanded={isProntuarioExpanded}
        toggleProntuario={toggleProntuario}
      />
    </>
  );
};

export default Header;
