import { LoginForm, WelcomeText } from "./style";
import { Container, LeftContainer, Logo, MainContainer } from "../../layout/loginContainer";
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
            <h2>Bem vindo!</h2>
          </WelcomeText>

          <LoginForm>
            <Link to="/login">Já possui uma conta?</Link>
            <Link to="/registry">Criar Conta</Link>
          </LoginForm>
        </LeftContainer>

        <MainContainer></MainContainer>
      </Container>
    </>
  );
}

export default Start;
