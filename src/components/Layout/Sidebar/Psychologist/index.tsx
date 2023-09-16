import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Collapse,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthContext } from "../../../../contexts/auth/AuthContext";

const StyledDrawer = styled.div<{ open: boolean }>`
  width: ${(props) => (props.open ? "200px" : "60px")};
  transition: width 0.3s;
  border-right: 1px solid #ddd;
  background-color: var(--bg-primary);
  height: 100vh;
  overflow-x: hidden;

  position: fixed;
  top: 0;
  left: 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  color: var(--bg-dark);
`;

const StyledIconButton = styled(IconButton)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledIcon = styled.span`
  color: var(--bg-dark);
`;

const StyledListItemIcon = styled(ListItemIcon)`
  margin-right: -20px;
`;

const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const useMobileCheck = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  path?: string;
};

const Sidebar = () => {
  const isMobile = useMobileCheck();
  const auth = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [prontuarioOpen, setProntuarioOpen] = useState(false);

  const handleLogout = () => {
    auth.signout();
  };

  const renderMenuItem = (item: MenuItem) => (
    <StyledListItem
      button
      onClick={item.label === "Sair" ? handleLogout : undefined}
    >
      <StyledListItemIcon>
        <StyledIcon>{item.icon}</StyledIcon>
      </StyledListItemIcon>
      {isOpen && <ListItemText primary={item.label} />}
    </StyledListItem>
  );

  return (
    <StyledDrawer open={isOpen}>
      <StyledIconButton onClick={() => setIsOpen((prev) => !prev)}>
        <MenuIcon style={{ color: "#594f4f" }} />
      </StyledIconButton>
      <StyledContainer>
        <List>
          {primaryMenuItems.map((item) => {
            if (item.label !== "Prontuário") {
              return renderMenuItem(item);
            } else {
              return (
                <React.Fragment key={item.label}>
                  <StyledListItem
                    button
                    onClick={() => setProntuarioOpen((prev) => !prev)}
                  >
                    <StyledListItemIcon>
                      <StyledIcon>{item.icon}</StyledIcon>
                    </StyledListItemIcon>
                    {isOpen && <ListItemText primary={item.label} />}
                  </StyledListItem>
                  <Collapse in={prontuarioOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {prontuarioSubItems.map((subItem) => (
                        <StyledListItem
                          key={subItem.label}
                          button
                          style={{ paddingLeft: 30 }}
                        >
                          {isOpen && <ListItemText primary={subItem.label} />}
                        </StyledListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              );
            }
          })}
        </List>
        <List>{secondaryMenuItems.map(renderMenuItem)}</List>
      </StyledContainer>
    </StyledDrawer>
  );
};

const primaryMenuItems: MenuItem[] = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "Prontuário", icon: <FolderIcon /> },
  { label: "Pacientes", icon: <GroupIcon /> },
];

const prontuarioSubItems: MenuItem[] = [
  { label: "Relatório" },
  { label: "Laudo" },
  { label: "Declaração" },
  { label: "Paciente" },
  { label: "Recibos" },
  { label: "Encaminhamentos" },
  { label: "Encerramento" },
];

const secondaryMenuItems: MenuItem[] = [
  { label: "Configurações", icon: <SettingsIcon /> },
  { label: "Sair", icon: <ExitToAppIcon /> },
];

export default Sidebar;
