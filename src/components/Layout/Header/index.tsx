import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar";
import logo from "../../../assets/img/logo.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: #ecf0f1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 998px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.2rem;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 50px;
  margin-right: 30px;
  position: relative;

  a {
    color: var(--bg-dark);
    text-decoration: none;
    border-bottom: 4px solid transparent;

    &:hover {
      border-bottom: 4px solid var(--bg-dark);
    }
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: var(--bg-dark);
  }
`;

const DropdownMenu = styled.div<DropdownMenuProps>`
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
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-left: 3px solid var(--bg-dark);
      border-bottom: none;
    }
  }
`;

type DropdownMenuProps = {
  isVisible: boolean;
};

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo da empresa" />
      <RightSection>
        <NavLinks>
          <Link to="">Home</Link>
          <div
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <Link to="">
              Prontuário{" "}
              <ArrowDropDownIcon
                fontSize="small"
                style={{ verticalAlign: "middle" }}
              />
            </Link>
            <DropdownMenu isVisible={isDropdownVisible}>
              <Link to="/link">Relatório</Link>
              <Link to="/link">Laudo</Link>
              <Link to="/link">Declaração</Link>
              <Link to="/link">Recibos</Link>
              <Link to="/link">Encaminhamentos</Link>
            </DropdownMenu>
          </div>
          <Link to="">Pacientes</Link>
        </NavLinks>
        <UserProfile>
          <span>Olá, usuário</span>
          <Avatar
            src="link_para_foto_do_perfil"
            size="40"
            color="#9de0ad"
            round={true}
            alt="Foto de perfil"
            name="Usuário"
          />
        </UserProfile>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
