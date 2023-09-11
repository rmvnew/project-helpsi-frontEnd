import { LoginForm, WelcomeText, LoginButton, GoogleButton } from "./style";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../../components/Layout/Container/Login/style";
import { LogoHelpsi } from "../../../assets/imgComponents/Logo";
import { GoogleLogo } from "../../../assets/imgComponents/GoogleLogo";

export const SignUp = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <LogoHelpsi />
          </Logo>

          <WelcomeText>
            <h2>Informações de acesso</h2>
          </WelcomeText>

          <LoginForm>
            <input type="text" placeholder="Nome completo" name="user_name" />
            <input type="email" placeholder="Email" name="user_email" />
            <input
              type="number"
              placeholder="Telefone (WhatsApp)"
              name="user_phone"
            />

            <input type="password" placeholder="Senha" name="user_password" />
            <input
              type="password"
              placeholder="Confirmar senha"
              name="user_password_confirm"
            />
            <LoginButton type="button">Aceitar e continuar</LoginButton>
            <GoogleButton>
              <GoogleLogo />
              Registre-se usando o google
            </GoogleButton>
          </LoginForm>
        </LeftContainer>
        <MainContainer />
      </Container>
    </>
  );
};