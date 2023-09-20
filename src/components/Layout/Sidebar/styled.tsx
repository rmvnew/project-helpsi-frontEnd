import styled from "styled-components";
import { SidebarProps } from "../../../types/Boolean";



export const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-300px")};
  height: 100%;
  width: 200px;
  background-color: #9de0ad;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  padding-top: 90px;
`;


export const SidebarLink = styled.div`
  
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    text-decoration: none;
    font-size: 1.2rem;
    color: var(--bg-dark);
    border-left: 5px solid transparent;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-left: 5px solid var(--bg-dark);
    }
  }
`;

export const SubItems = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  padding-left: 20px;

  a {
    font-size: 0.8rem;
    font-family: sans-serif;
    display: block;
    padding: 10px 0;
    text-decoration: none;
    color: var(--bg-dark);
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;