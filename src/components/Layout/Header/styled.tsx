import styled from "styled-components";
import { DropdownMenuProps } from "../../../types/Boolean";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #ecf0f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 998px) {
    padding: 10px 10px;
  }
`;
export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media (max-width: 998px) {
    margin-left: 90px;
  }

  @media (max-width: 768px) {
    width: 100px;
  }

  @media (max-width: 480px) {
    margin-left: 50px;
  }
`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    color: var(--bg-dark);
  }

  @media (max-width: 600px) {
    gap: 5px;
    span {
      font-size: 0.8rem;
    }
  }
`;

export const Btn = styled.div`
  margin-left: 1px;
`;

export const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const DropdownMenu = styled.div<DropdownMenuProps>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  position: absolute;
  top: 100%;
  width: 250px;
  padding: 10px;
  font-size: 0.8rem;
  left: 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;

  a {
    display: block;
    margin-top: 5px;
    font-family: sans-serif;
    padding: 10px 10px 10px 13px;
    text-decoration: none;
    color: var(--bg-dark);
    border-left: 3px solid transparent;
    border-bottom: none;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-left: 3px solid var(--bg-dark);
      border-bottom: none;
    }
  }
`;

export const MenuButton = styled.button`
  display: block;
  color: var(--bg-dark);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1010;

`;
