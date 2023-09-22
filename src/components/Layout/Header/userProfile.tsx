import React, { useContext, useState } from "react";
import { Btn, MyProfile, UserProfile } from "./styled";
import Avatar from "react-avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { getFormattedName } from "../../../common/utils/functions/toTitleCase";

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
  const { signout } = useContext(AuthContext);
  const { anchorEl, openMenu, closeMenu } = useMenu();
  const auth = useContext(AuthContext);
  const formattedName = getFormattedName(auth.user?.name);

  const handleLogout = async () => {
    await signout();
    closeMenu();
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
        <MenuItem onClick={closeMenu}>Config</MenuItem>
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </UserProfile>
  );
};
