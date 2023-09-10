import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth/AuthContext";

const SidebarContainer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "170px" : "60px")};
  height: 100%;
  background-color: var(--bg-primary);
  color: var(--bg-dark);
  position: fixed;
  top: 0;
  left: 0;
  transition: width 0.3s;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const SidebarContent = styled.div`
  padding: 15px;
`;

const SidebarButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--bg-dark);
  font-size: 20px;
  padding: 5px;
`;

const SidebarItem = styled.div<{ open: boolean }>`
  display: flex;
  padding: 5px;
  cursor: pointer;
  font-size: 15px;
  align-items: center;
  margin-bottom: 10px;

  &:hover {
    border-radius: 3px;
    background: var(--bg-hover-primary);
  }

  ${(props) =>
    !props.open &&
    `
    ${SidebarText} {
      display: none;
    }
  `}
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
  transition: background-color 0.3s;
`;

const SidebarText = styled.div`
  color: var(--bg-dark);
`;

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: var(--bg-dark);
`;

const SidebarMenuItem: React.FC<{
  open: boolean;
  icon: React.ReactNode;
  text: string;
}> = ({ open, icon, text }) => (
  <SidebarItem open={open}>
    <SidebarIcon>{icon}</SidebarIcon>
    <SidebarText>{text}</SidebarText>
  </SidebarItem>
);

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer open={isOpen}>
      <SidebarHeader>
        <SidebarButton onClick={toggleSidebar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </SidebarButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuItem open={isOpen} icon={<HomeIcon />} text="Home" />
        <SidebarMenuItem open={isOpen} icon={<AccountBoxIcon />} text="Pacientes" />
        <SidebarMenuItem open={isOpen} icon={<DescriptionIcon />} text="Prontuário" />
        
        <SidebarItem open={isOpen}>
          <SidebarIcon>
            <ExitToAppIcon />
          </SidebarIcon>
          <SidebarText>
            <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
          </SidebarText>
        </SidebarItem>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
