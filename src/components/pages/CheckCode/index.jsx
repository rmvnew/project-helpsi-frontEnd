import { LoginButton, LoginForm, Resend, WelcomeText } from "./style";
import logo from "../../../img/helpsi_logo_1.png";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../layout/loginContainer";
import { ToastContainer } from "react-toastify";

function RecoverPass() {
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
}

export default RecoverPass;
