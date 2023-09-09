
import { LoginButton, LoginForm, WelcomeText } from "./style";
import { ToastContainer } from "react-toastify";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../components/Layout/Container/loginContainer";
import { LogoHelpsi } from "../../assets/imgComponents/Logo";

export const RecoverPass = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <LogoHelpsi/>
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
};
