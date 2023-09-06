import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleButton,
  LoginButton,
  LoginForm,
  LoginOptions,
  PasswordReset,
  WelcomeText,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../layout/loginContainer";
import logo from "../../../img/helpsi_logo_1.png";
import google from "../../../img/google.png";

function Login() {
  const API_URL = "http://localhost:3000/api/v1/auth/login";

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const sendLoginDataToAPI = async () => {
    try {
      const response = await axios.post(API_URL, credentials);

      console.log("API response:", response.data);

      if (response.status === 200) {
        navigate("/home");
      } else {
        toast.error("Erro ao fazer login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Login error:", error);

      toast.error("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  const handleLoginClick = () => {
    sendLoginDataToAPI();
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <img src={logo} alt="Logo da Empresa" />
          </Logo>

          <WelcomeText>
            <h2>
              Que bom te ver por aqui! <br />
            </h2>
            <p>Acesse sua conta agora mesmo.</p>
          </WelcomeText>

          <LoginForm>
            <input
              type="email"
              placeholder="Digite seu email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
            <PasswordReset>
              <Link to="#">Esqueceu sua senha?</Link>
            </PasswordReset>
            <LoginButton onClick={handleLoginClick}>Entrar</LoginButton>
            ou
            <GoogleButton href="https://www.google.com">
              <img src={google} alt="Google Icon" />
              Logar com o Google
            </GoogleButton>
            <LoginOptions>
              <p>Não tem uma conta?</p>
              <p>
                <Link to="/registry">Registre-se aqui</Link>
              </p>
            </LoginOptions>
          </LoginForm>
        </LeftContainer>
        <MainContainer />
      </Container>
      <ToastContainer />
    </>
  );
}

export default Login;