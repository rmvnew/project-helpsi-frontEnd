import {
  Container,
  LeftContainer,
  LoginButton,
  LoginForm,
  Logo,
  MainContainer,
  WelcomeText,
} from "./style";
import logo from "../../../img/helpsi_logo_1.png";
import { Link } from "react-router-dom";

function Start() {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <img src={logo} alt="Logo da Empresa" />
          </Logo>

          <WelcomeText>
            <h2>Seja bem vindo!</h2>
          </WelcomeText>

          <LoginForm>
            <LoginButton><Link to="/login">Já possui uma conta?</Link></LoginButton>
            <LoginButton><Link to="/registry">Criar Conta</Link></LoginButton>
          </LoginForm>
        </LeftContainer>

        <MainContainer></MainContainer>
      </Container>
    </>
  );
}

export default Start;
