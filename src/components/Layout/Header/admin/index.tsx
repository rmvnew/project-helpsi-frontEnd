import { UserProfileSection } from "../userProfile";
import logo from "../../../../assets/img/logo.svg";
import { HeaderContainer, Logo } from "../styled";

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <Logo src={logo} alt="Logo da empresa" />
        </div>
        <UserProfileSection />
      </HeaderContainer>
    </>
  );
};

export default Header;
