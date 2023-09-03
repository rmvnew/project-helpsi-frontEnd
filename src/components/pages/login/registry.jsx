import {
  Container,
  LeftContainer,
  LoginForm,
  Logo,
  MainContainer,
  WelcomeText,
  LoginButton,
  LoginOptions,
} from "./style";
import logo from "../../../img/helpsi_logo_1.png";
import { Link } from "react-router-dom";

function Registry() {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <img src={logo} alt="Logo da Empresa" />
          </Logo>

          <WelcomeText>
            <h2>
              Olá! para <br />
              para começar crie sua conta
            </h2>
          </WelcomeText>

          <LoginForm>
            <input type="text" placeholder="Digite seu nome" />
            <input type="number-format" placeholder="Digite seu CPF" />
            <input type="number" placeholder="(99)9999-9999" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Repetir a senha" />
            <LoginButton>Registrar</LoginButton>
            <LoginOptions>
              <p>Já possui uma conta?</p>
              <p>
                <Link to="/">Faça login</Link>
              </p>
            </LoginOptions>
          </LoginForm>
        </LeftContainer>

        <MainContainer></MainContainer>
      </Container>
    </>
  );
}

export default Registry;
