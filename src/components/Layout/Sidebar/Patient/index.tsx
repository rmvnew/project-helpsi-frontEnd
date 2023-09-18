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
  Home as HomeIcon,
  Menu as MenuIcon,
  Settings as SettingsIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  CalendarToday as CalendarTodayIcon,
  Book as BookIcon,
} from "@material-ui/icons";

const Sidebar = () => {
  const auth = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [dailyOpen, setDailyOpen] = useState(false);
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
            {primaryMenuItems.map((item) => {
              if (item.label === "Agendar") {
                return (
                  <React.Fragment key={item.label}>
                    <StyledListItem
                      button
                      onClick={() => {
                        setScheduleOpen((prev) => !prev);
                        handleItemClick(item.label);
                      }}
                      selected={item.label === selectedItem}
                    >
                      <StyledListItemIcon>
                        <StyledIcon>{item.icon}</StyledIcon>
                        <StyledListItemText primary={item.label} />
                        {scheduleOpen ? (
                          <ExpandLessIcon
                            style={{ color: MENU_COLOR, width: "15px" }}
                          />
                        ) : (
                          <ExpandMoreIcon
                            style={{ color: MENU_COLOR, width: "15px" }}
                          />
                        )}
                      </StyledListItemIcon>
                    </StyledListItem>
                    <Collapse in={scheduleOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {scheduleSubItems.map((subItem) => (
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
                );
              } else if (item.label === "Diário") {
                return (
                  <React.Fragment key={item.label}>
                    <StyledListItem
                      button
                      onClick={() => {
                        setDailyOpen((prev) => !prev);
                        handleItemClick(item.label);
                      }}
                      selected={item.label === selectedItem}
                    >
                      <StyledListItemIcon>
                        <StyledIcon>{item.icon}</StyledIcon>
                        <StyledListItemText primary={item.label} />
                        {dailyOpen ? (
                          <ExpandLessIcon
                            style={{ color: MENU_COLOR, width: "15px" }}
                          />
                        ) : (
                          <ExpandMoreIcon
                            style={{ color: MENU_COLOR, width: "15px" }}
                          />
                        )}
                      </StyledListItemIcon>
                    </StyledListItem>
                    <Collapse in={dailyOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {dailySubItems.map((subItem) => (
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
                );
              } else {
                return (
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
                );
              }
            })}
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
  { label: "Agendar", icon: <CalendarTodayIcon /> },
  { label: "Diário", icon: <BookIcon /> },
];

const scheduleSubItems = [{ label: "Online" }, { label: "Presencial" }];

const dailySubItems = [{ label: "Diário de emoções" }, { label: "Histórico" }];

const secondaryMenuItems = [
  { label: "Configurações", icon: <SettingsIcon /> },
  { label: "Sair", icon: <ExitToAppIcon /> },
];

export default Sidebar;
