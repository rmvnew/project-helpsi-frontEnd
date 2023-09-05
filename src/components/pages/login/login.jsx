import logo from "../../../img/helpsi_logo_1.png";
import google from "../../../img/google.png";
import {
  GoogleButton,
  LoginButton,
  LoginForm,
  LoginOptions,
  PasswordReset,
  WelcomeText,
} from "./style";
import { Link } from "react-router-dom";
import { Container, LeftContainer, Logo, MainContainer } from "../../layout/loginContainer";

function Login() {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <img src={logo} alt="Logo da Empresa" />
          </Logo>

          <WelcomeText>
            <h2>
              Que bom te ver por aqui! <br />
            </h2>
            <p>Acesse sua conta agora mesmo.</p>
          </WelcomeText>

          <LoginForm>
            <input type="email" placeholder="Digite seu email" />
            <input type="password" placeholder="Digite sua senha" />
            <PasswordReset>
              <Link to="#">Esqueceu sua senha?</Link>
            </PasswordReset>
            <LoginButton>Entrar</LoginButton>
            ou
            <GoogleButton href="https://www.google.com">
              <img src={google} alt="Google Icon" />
              Logar com o Google
            </GoogleButton>
            <LoginOptions>
              <p>Não tem uma conta?</p>
              <p>
                <Link to="/registry">Registre-se aqui</Link>
              </p>
            </LoginOptions>
          </LoginForm>
        </LeftContainer>
        <MainContainer/>
      </Container>
    </>
  );
}

export default Login;
