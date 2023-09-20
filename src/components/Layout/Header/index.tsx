import { useState } from "react";
import { Link } from "react-router-dom";
import { UserProfileSection } from "./userProfile";

import Dropdown from "./dropdown";
import SidebarComponent from "../Sidebar";

import logo from "../../../assets/img/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";


import {
  HeaderContainer,
  Logo,
  MenuButton,
  NavLinks,
  RightSection,
} from "./styled";



const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProntuarioExpanded, setProntuarioExpanded] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleProntuario = () => setProntuarioExpanded(!isProntuarioExpanded);
  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);

  return (
    <>
      <HeaderContainer>
        <MenuButton onClick={toggleSidebar}>
          <MenuIcon />
        </MenuButton>
        <Logo src={logo} alt="Logo da empresa" />
        <RightSection>
          <NavLinks>
            <Link to="/">Home</Link>
            <div onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <Link to="/">Prontuário</Link>
              <Dropdown isVisible={isDropdownVisible} />
            </div>
            <Link to="/">Pacientes</Link>
          </NavLinks>
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
