import { AuthContext } from "../../../contexts/auth/AuthContext";
import {
  getFirstNameFormatted,
  getFormattedName,
} from "../../../common/functions/formatString";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useContext, useState } from "react";
import { MyProfile, UserProfile } from "./styled";

const styles = {
  greeting: {
    marginTop: "1rem",
  },
  profileInfo: {
    fontSize: ".6rem",
    color: "#594f4f6e",
    marginTop: ".5rem",
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

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
}

export const UserProfileSection = () => {
  const { closeMenu } = useMenu();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const formattedName = getFormattedName(auth.user?.name);
  const firstName = getFirstNameFormatted(auth.user?.name ?? "");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    auth.signout();
    navigate("/");
  };

  return (
    <UserProfile>
      <MyProfile>
        <span style={styles.greeting}>{`${formattedName ?? "Usuário"}`}</span>
        <span style={styles.profileInfo} onClick={closeMenu} >Meu perfil</span>
      </MyProfile>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt={formattedName ?? "Usuário"}
            sx={{ bgcolor: "#9fdfae", fontSize: ".8rem", marginTop: "10px" }}
          >
            {getInitials(firstName ?? "U")}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </Menu>
    </UserProfile>
  );
};
