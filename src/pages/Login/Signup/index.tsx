import { LoginForm, WelcomeText, LoginButton, GoogleButton } from "./style";
import  LogoHelpsi  from "../../../assets/img/logo.svg";
import  GoogleLogo  from "../../../assets/img/google.png";

export const SignUp = () => {
  return (
    <>
      <div>
        <div>
          <div>
          <img src={LogoHelpsi} alt="Logo da empresa" />
          </div>

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
            <img src={GoogleLogo} alt="Logo Google" />
              Registre-se usando o google
            </GoogleButton>
          </LoginForm>
        </div>
        <div />
      </div>
    </>
  );
};
