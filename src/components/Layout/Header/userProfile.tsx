import React, { useContext, useState } from "react";
import { Btn, MyProfile, UserProfile } from "./styled";
import Avatar from "react-avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menu from "@material-ui/core/Menu";
import { AuthContext } from "../../../contexts/auth/AuthContext";

const styles = {
  greeting: {
    marginTop: "1rem",
  },
  profileInfo: {
    fontSize: ".7rem",
    color: "#594f4f6e",
    marginTop: ".5rem",
  },
  dropDownIcon: {
    color: "#594f4fd0",
  },
  menuButton: {
    background: "#9de0ad",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    margin: "4px",
    cursor: "pointer",
    outline: "none",
    transition: "background 0.3s",
    "&:hover": {
      background: "#7ebc89",
    },
  },
};

function useMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    openMenu,
    closeMenu,
  };
}

export const UserProfileSection = () => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
  };
  const { anchorEl, openMenu, closeMenu } = useMenu();

  return (
    <UserProfile>
      <MyProfile>
        <span style={styles.greeting}>Olá, usuário</span>
        <span style={styles.profileInfo}>Meu perfil</span>
      </MyProfile>
      <Avatar
        src="link_para_foto_do_perfil"
        size="50"
        color="#9de0ad"
        round
        alt="Foto de perfil"
        name="Usuário"
      />

      <Btn onClick={openMenu}>
        <ArrowDropDownIcon style={styles.dropDownIcon} />
      </Btn>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <button style={styles.menuButton} onClick={closeMenu}>
          Config
        </button>
        <button style={styles.menuButton} onClick={handleLogout}>
          Sair
        </button>
      </Menu>
    </UserProfile>
  );
};
