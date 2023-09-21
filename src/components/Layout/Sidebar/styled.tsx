import styled from "styled-components";
import { SidebarProps } from "../../../types/Boolean";

export const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-300px")};
  height: 100%;
  width: 250px;
  background-color: var(--bg-secundary);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  padding: 10px;
  padding-top: 20px;

  @media (max-width: 998px) {
    padding-top: 70px;
    img {
      display: none;
    }
  }
`;

export const SidebarLink = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    margin-top: 20px;
    text-decoration: none;
    font-size: 1.3rem;
    color: var(--bg-dark);
    border-left: 5px solid transparent;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-left: 5px solid var(--bg-dark);
    }

    @media (max-width: 998px) {
      font-size: 1rem;
      margin-top: 20px;
      padding-left: 5px;
    }
  }
`;

export const SubItems = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "none" : "block")};
  padding-left: 20px;
  margin-top: 10px;

  a {
    font-size: 1rem;
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
