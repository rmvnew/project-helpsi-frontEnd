import {
  Container,
  LeftContainer,
  LoginButton,
  LoginForm,
  Logo,
  MainContainer,
  WelcomeText,
} from "../login/style";
import logo from "../../../img/helpsi_logo_1.png";

function Profile() {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <img src={logo} alt="Logo da Empresa" />
          </Logo>

          <WelcomeText>
            <h2>Seja bem vindo!</h2>
            <p>Você está acessando sua conta como:</p>
          </WelcomeText>

          <LoginForm>
            <LoginButton>Sou um Cliente</LoginButton>
            <LoginButton>Sou um Psicólogo</LoginButton>
          </LoginForm>
        </LeftContainer>

        <MainContainer></MainContainer>
      </Container>
    </>
  );
}

export default Profile;
