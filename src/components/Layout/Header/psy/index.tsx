import React, { useState, useEffect } from "react";
import { UserProfileSection } from "../userProfile";
import SidebarComponent from "../../Sidebar/psy";
import logo from "../../../../assets/img/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { HeaderContainer, Logo, MenuButton } from "../styled";

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 998);
  const [isDocumentsExpanded, setDocumentsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 998);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDocuments = () => setDocumentsExpanded(!isDocumentsExpanded);

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
        isDocumentsExpanded={isDocumentsExpanded}
        toggleDocuments={toggleDocuments}
      />
    </>
  );
};

export default Header;
