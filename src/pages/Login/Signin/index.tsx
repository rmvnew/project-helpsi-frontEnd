import { useLoginFunctions } from "../../../hooks/useLogin";
import {
  Logo,
  google,
  Bonecos,
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
  Link,
  Form,
  Google,
  Span,
  TextContainer,
  ToastContainer,
  GoogleLogin,
} from "../../../common/utils/imports/signin";

export const SignIn = () => {
  const {
    form,
    isLoggingIn,
    handleInputChange,
    handleFormSubmit,
    handleGoogleSuccess,
    handleGoogleFailure,
  } = useLoginFunctions();

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
            <Link to="/login/recover-pass">Esqueceu sua senha</Link>
            <button type="submit">
              {isLoggingIn ? "Entrando..." : "Entrar"}
            </button>
          </Form>
          ou
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID ?? ""}
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <Google
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img src={google} alt="icone google" />
                <span>Entrar com o Google</span>
              </Google>
            )}
          />
          <Span>
            Não tem uma conta?
            <Link to="/signup"> Registre-se aqui</Link>
          </Span>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="Psychologist" />
        </Image>
      </LoginContainer>
      <ToastContainer />
    </LoginBackground>
  );
};
