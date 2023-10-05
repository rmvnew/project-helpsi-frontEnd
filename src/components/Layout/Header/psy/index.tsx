import React, { useState } from "react";
import { UserProfileSection } from "../userProfile";
import SidebarComponent from "../../Sidebar/psy";
import logo from "../../../../assets/img/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { HeaderContainer, Logo, MenuButton } from "../styled";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDocumentsExpanded, setDocumentsExpanded] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleDocuments = () => setDocumentsExpanded(!isDocumentsExpanded);

  return (
    <>
      <HeaderContainer>
        <MenuButton onClick={toggleSidebar}>
          <MenuIcon />
        </MenuButton>
        <Link to="/psy/home">
          <Logo src={logo} alt="Logo da empresa" />
        </Link>
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
