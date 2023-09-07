import React from "react";
import logo from "../../../assets/img/logo.svg";
import googleImage from "../../../assets/img/google.png"; // Importe a imagem do Google desta forma
import { Link } from "react-router-dom";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../layout/loginContainer";
import {
  GoogleButton,
  LoginButton,
  LoginForm,
  LoginOptions,
  PasswordReset,
  WelcomeText,
} from "./style";

const Login = () => {
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
            <input type="email" placeholder="Digite seu email" name="email" />
            <input
              type="password"
              placeholder="Digite sua senha"
              name="password"
            />
            <PasswordReset>
              <Link to="/recoverPassword">Esqueceu sua senha?</Link>
            </PasswordReset>
            <LoginButton>Entrar</LoginButton>
            ou
            <GoogleButton>
              <img src={googleImage} alt="Google Icon" />
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
        <MainContainer />
      </Container>
    </>
  );
};

export default Login;
