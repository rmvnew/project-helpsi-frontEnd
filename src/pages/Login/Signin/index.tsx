import { useLogin } from "../../../hooks/useLogin";

import {
  Logo,
  Bonecos,
  FormGroup,
  Image,
  LoginContainer,
  Link,
  Form,
  Span,
  TextContainer,
} from "../../../common/utils/imports/signin";
import { LoginBackground } from "../../../components/Layout/Container/ContainerLogin/background";

export const SignIn = () => {
  const { form, isLoggingIn, handleInputChange, handleFormSubmit } = useLogin();

  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={Logo} alt="Logo Helpsi" />
          <TextContainer>
            <h2>Que bom te ver por aqui!</h2>
            <p>Acesse sua conta agora mesmo</p>
          </TextContainer>
          <Form onSubmit={handleFormSubmit}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Digite seu email"
              required
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              required
            />
            <Link to="/login/recover-pass">Esqueceu sua senha?</Link>
            <button type="submit">
              {isLoggingIn ? "Entrando..." : "Entrar"}
            </button>
          </Form>

          <Span>
            Não tem uma conta?
            <Link to="/signup">
              {" "}
              <strong>Registre-se aqui</strong>
            </Link>
          </Span>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="Psychologist" />
        </Image>
      </LoginContainer>
    </LoginBackground>
  );
};
