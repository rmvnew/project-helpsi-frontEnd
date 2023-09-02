import logo from "../../../img/helpsi_logo_1.png";
import google from "../../../img/google.png";
import {
  Container,
  GoogleButton,
  LeftContainer,
  LoginButton,
  LoginForm,
  LoginOptions,
  Logo,
  MainContainer,
  PasswordReset,
  WelcomeText,
} from "./style";
import { Link } from "react-router-dom";

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
              acesse sua conta
            </h2>
          </WelcomeText>

          <LoginForm>
            <input type="number_format" placeholder="Digite seu CPF" />
            <input type="password" placeholder="Senha" />
            <PasswordReset>
              <Link to="#">Esqueceu sua senha?</Link>
            </PasswordReset>
            <LoginButton>Entrar</LoginButton>
            <LoginOptions>
              ou
              <GoogleButton href="https://www.google.com">
                <img src={google} alt="Google Icon" />
                Logar com o Google
              </GoogleButton>
              <p>
                Não tem uma conta?
                <Link to="/registry">
                  Registre-se aqui
                </Link>
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
