import Logo from "../../../../assets/img/logo.svg";
import Bonecos from "../../../../assets/img/Psychologist.svg";
import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
  TextContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";
import useResetPassword from "../../../../hooks/useResetPass";
import { Form } from "../RecoverPass/styled";
import { Resend } from "./styled";

export const ResetPass = () => {
  const {
    form,
    confirmPassword,
    setConfirmPassword,
    isResetting,
    handleChange,
    sendCode,
    sendRecoveryCode,
  } = useResetPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendCode();
  };

  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={Logo} alt="Logo Helpsi" />
          <TextContainer>
            <h2>Altere sua senha</h2>
            <p>
              Digite o código de verificação que acabamos de enviar em seu
              endereço de e-mail.
            </p>
          </TextContainer>
          <Form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Digite o código"
              value={form.code}
              onChange={handleChange}
              name="code"
              required
            />
            <input
              type="password"
              placeholder="Digite sua nova senha"
              value={form.password}
              onChange={handleChange}
              name="password"
              required
            />
            <input
              type="password"
              placeholder="Corfirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Digite seu email"
              value={form.email}
              onChange={handleChange}
              name="email"
              required
            />
            <button type="submit">
              {isResetting ? "Redefinindo..." : "Redefinir senha"}
            </button>
          </Form>
          <Resend onClick={sendRecoveryCode}>
            Não recebeu o código? Digite seu email e clique em
            <strong> Reenviar</strong>
          </Resend>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="Psychologist" />
        </Image>
      </LoginContainer>
    </LoginBackground>
  );
};
