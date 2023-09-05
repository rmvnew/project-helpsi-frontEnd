import {
  Container,
  LeftContainer,
  LoginForm,
  Logo,
  MainContainer,
  WelcomeText,
  LoginButton,
  GoogleButton
} from "../registry/style";
import logo from "../../../../img/helpsi_logo_1.png";
import google from "../../../../img/google.png";


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
              Informações de acesso
            </h2>
          </WelcomeText>

          <LoginForm>
            <input type="text" placeholder="Nome completo" />
            <input type="number" placeholder="Telefone (WhatsApp)" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confimar a senha" />
            <p>
              Ao clicar em continuar, você estará concordando com o nosso
              <strong> termo de uso.</strong>
            </p>
            <LoginButton>Aceitar e continuar</LoginButton>
            <GoogleButton href="https://www.google.com">
              <img src={google} alt="Google Icon" />
              Registre-se usando o google
            </GoogleButton>
          </LoginForm>
        </LeftContainer>

        <MainContainer></MainContainer>
      </Container>
    </>
  );
}

export default Registry;
