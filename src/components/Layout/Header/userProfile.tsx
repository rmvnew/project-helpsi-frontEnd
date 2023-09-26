import React, { useContext, useState } from "react";
import { Btn, MyProfile, UserProfile } from "./styled";
import Avatar from "react-avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menu from "@material-ui/core/Menu";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { getFormattedName } from "../../../common/functions/formatString";
import { useNavigate } from "react-router-dom";

const styles = {
  greeting: {
    marginTop: "1rem",
  },
  profileInfo: {
    fontSize: ".6rem",
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
  const { anchorEl, openMenu, closeMenu } = useMenu();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const formattedName = getFormattedName(auth.user?.name);

  const handleLogout = async () => {
    await auth.signout();
    navigate("/");
  };

  return (
    <UserProfile>
      <MyProfile>
        <span style={styles.greeting}>{`${formattedName ?? "Usuário"}`}</span>
        <span style={styles.profileInfo}>Meu perfil</span>
      </MyProfile>
      <Avatar
        src="link_para_foto_do_perfil"
        size="40"
        color="#9de0ad"
        round
        alt="Foto de perfil"
        name={`${formattedName}`}
        style={{ marginTop: "10px" }}
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
