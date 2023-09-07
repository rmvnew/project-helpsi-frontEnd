import logo from "../../../assets/img/logo.svg";
import { ToastContainer } from "react-toastify";
import { LoginButton, LoginForm, Resend, WelcomeText } from "./style";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../layout/loginContainer";

export const CheckCode = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <img src={logo} alt="Logo da Empresa" />
          </Logo>
          <WelcomeText>
            <h2>Verificando...</h2>
            <p>
              Digite o código de verificação que acabamos de enviar em seu
              endereço de e-mail.
            </p>
          </WelcomeText>
          <LoginForm>
            <input type="text" name="codigo1" required />
            <input type="text" name="codigo2" required />
            <input type="text" name="codigo3" required />
            <input type="text" name="codigo4" required />
          </LoginForm>
          <LoginButton>Verifique</LoginButton>
          <Resend>Não recebeu o código? Reenviar</Resend>
        </LeftContainer>
        <MainContainer />
      </Container>
      <ToastContainer />
    </>
  );
};