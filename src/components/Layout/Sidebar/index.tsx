import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Menu,
  Close,
  Home,
  Business,
  Person,
  Settings,
} from "@mui/icons-material";
import App from "../../../App";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Greetings = styled.div`
  font-size: 24px;
`;

const MainContent = styled.div`
  display: flex;
`;

const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  background-color: #333;
  color: #fff;
  width: ${(props) => (props.isOpen ? "250px" : "60px")};
  min-height: 100vh;
  padding: 20px;
  transition: width 0.3s ease-in-out;

  h2 {
    margin-top: 0;
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
    font-size: 18px;
  }

  ul li span {
    display: ${(props) => (props.isOpen ? "inline" : "none")};
    margin-left: 10px;
  }

  ul li:hover {
    background-color: #555;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? "100%" : "60px")};
  }
`;

const ToggleButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <PageWrapper>
      <Header>
        <ToggleButton onClick={toggleSidebar}>
          {isOpen ? <Close /> : <Menu />}
        </ToggleButton>
        <Greetings>Bem-vindo, usuário!</Greetings>
      </Header>
      <MainContent>
        <SidebarWrapper isOpen={isOpen}>
          <ul>
            <li>
              <Home />
              <span>Home</span>
            </li>
            <li>
              <Business />
              <span>Business</span>
            </li>
            <li>
              <Person />
              <span>Profile</span>
            </li>
            <li>
              <Settings />
              <span>Settings</span>
            </li>
          </ul>
        </SidebarWrapper>
        {<App/>}
      </MainContent>
    </PageWrapper>
  );
};

export default Sidebar;
