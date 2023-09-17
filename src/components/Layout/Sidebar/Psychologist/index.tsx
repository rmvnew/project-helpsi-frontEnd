import React, { useState, useContext } from "react";
import {
  StyledIconButton,
  StyledIcon,
  StyledListItemIcon,
  StyledListItem,
  StyledListItemText,
  StyledSubItemText,
  MENU_COLOR,
  StyledContainer,
} from "./styled";
import { AuthContext } from "../../../../contexts/auth/AuthContext";
import { Collapse, List, Drawer } from "@material-ui/core";
import {
  ExitToApp as ExitToAppIcon,
  FolderOpen as FolderIcon,
  Group as GroupIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@material-ui/icons";

const Sidebar = () => {
  const auth = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [prontuarioOpen, setProntuarioOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleLogout = () => {
    auth.signout();
  };

  const handleItemClick = (label: string) => {
    if (label === "Sair") {
      handleLogout();
    } else {
      setSelectedItem(label);
    }
  };

  return (
    <div>
      <StyledIconButton onClick={() => setIsOpen((prev) => !prev)}>
        <MenuIcon style={{ color: MENU_COLOR }} />
      </StyledIconButton>

      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <StyledContainer>
          <List>
            {primaryMenuItems.map((item) =>
              item.label !== "Prontuário" ? (
                <StyledListItem
                  key={item.label}
                  button
                  onClick={() => handleItemClick(item.label)}
                  selected={item.label === selectedItem}
                >
                  <StyledListItemIcon>
                    <StyledIcon>{item.icon}</StyledIcon>
                    <StyledListItemText primary={item.label} />
                  </StyledListItemIcon>
                </StyledListItem>
              ) : (
                <React.Fragment key={item.label}>
                  <StyledListItem
                    button
                    onClick={() => {
                      setProntuarioOpen((prev) => !prev);
                      handleItemClick(item.label);
                    }}
                    selected={item.label === selectedItem}
                  >
                    <StyledListItemIcon>
                      <StyledIcon>{item.icon}</StyledIcon>
                      <StyledListItemText primary={item.label} />
                      {prontuarioOpen ? (
                        <ExpandLessIcon style={{ color: MENU_COLOR, width: "15px" }} />
                      ) : (
                        <ExpandMoreIcon style={{ color: MENU_COLOR, width: "15px" }} />
                      )}
                    </StyledListItemIcon>
                  </StyledListItem>
                  <Collapse in={prontuarioOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {prontuarioSubItems.map((subItem) => (
                        <StyledListItem
                          key={subItem.label}
                          button
                          onClick={() => handleItemClick(subItem.label)}
                          selected={subItem.label === selectedItem}
                        >
                          <StyledSubItemText primary={subItem.label} />
                        </StyledListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              )
            )}
          </List>
          <List>
            {secondaryMenuItems.map((item) => (
              <StyledListItem
                key={item.label}
                button
                onClick={() => handleItemClick(item.label)}
                selected={item.label === selectedItem}
              >
                <StyledListItemIcon>
                  <StyledIcon>{item.icon}</StyledIcon>
                  <StyledListItemText primary={item.label} />
                </StyledListItemIcon>
              </StyledListItem>
            ))}
          </List>
        </StyledContainer>
      </Drawer>
    </div>
  );
};

const primaryMenuItems = [
  { label: "Home", icon: <HomeIcon /> },
  { label: "Prontuário", icon: <FolderIcon /> },
  { label: "Pacientes", icon: <GroupIcon /> },
];

const prontuarioSubItems = [
  { label: "Relatório" },
  { label: "Laudo" },
  { label: "Declaração" },
  { label: "Paciente" },
  { label: "Recibos" },
  { label: "Encaminhamentos" },
  { label: "Encerramento" },
];

const secondaryMenuItems = [
  { label: "Configurações", icon: <SettingsIcon /> },
  { label: "Sair", icon: <ExitToAppIcon /> },
];

export default Sidebar;
