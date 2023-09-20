import { UserProfile } from "./styled";
import Avatar from "react-avatar";

export const UserProfileSection: React.FC = () => (
  <UserProfile>
    <span>Olá, usuário</span>
    <Avatar
      src="link_para_foto_do_perfil"
      size="40"
      color="#9de0ad"
      round
      alt="Foto de perfil"
      name="Usuário"
    />
  </UserProfile>
);
