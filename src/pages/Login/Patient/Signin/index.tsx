import React, { ChangeEvent, useContext, useState } from "react";
import { GoogleLogin } from "react-google-login";
import Logo from "../../../../assets/img/logo.svg";
import google from "../../../../assets/img/google.svg";
import Bonecos from "../../../../assets/img/Psychologist.svg";
import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";
import { Link, useNavigate } from "react-router-dom";
import { Form, Google, Span, TextContainer } from "./styled";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../../contexts/auth/AuthContext";

export const SignIn = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    const { email, password } = form;
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged && isLogged.status) {
        navigate("/home");
      } else {
        toast.error("Erro ao fazer login. Verifique suas credenciais.");
      }
    }
    setIsLoggingIn(false);
  };

  const handleGoogleSuccess = async (response: any) => {
    if (response.tokenId) {
      const result = await auth.signinWithGoogle(response.tokenId);
      if (result && result.status) {
        navigate("/home/patient");
      } else {
        toast.error(result.message || "Erro ao fazer login com o Google.");
      }
    }
  };

  const handleGoogleFailure = (error: any) => {
    console.error("Erro no login com o Google:", error);
    
  };

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
            <Link to="/recover-pass">Esqueceu sua senha</Link>
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
            <Link to="/signup/patient"> Registre-se aqui</Link>
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
