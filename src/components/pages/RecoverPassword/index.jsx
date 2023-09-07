import logo from "../../../assets/img/logo.svg";
import { LoginButton, LoginForm, WelcomeText } from "./style";
import { ToastContainer } from "react-toastify";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../layout/loginContainer";

function RecoverPass() {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <img src={logo} alt="Logo da Empresa" />
          </Logo>
          <WelcomeText>
            <h2>Você esqueceu sua senha?</h2>
            <p>
              Não se preocupe! Acontece. Por favor, insira o endereço de e-mail
              vinculado à sua conta.
            </p>
          </WelcomeText>
          <LoginForm>
            <input type="email" placeholder="Digite seu email" name="email" />
            <LoginButton>Envie o código</LoginButton>
          </LoginForm>
        </LeftContainer>
        <MainContainer />
      </Container>
      <ToastContainer />
    </>
  );
}

export default RecoverPass;
