import {
  Container,
  LeftContainer,
  MainContainer,
} from "../../components/layout/loginContainer";
import {
  GoogleButton,
  LoginButton,
  LoginForm,
  LoginOptions,
  PasswordReset,
  WelcomeText,
} from "./style";

import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { LogoHelpsi } from "../../components/layout/Logo";
import { GoogleLogo } from "../../components/layout/GoogleLogo";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState('')

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password, code);
      if (isLogged.status) {
        navigate("/");
      } 
    } else {
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <LogoHelpsi />
          <WelcomeText>
            <h2>
              Que bom te ver por aqui! <br />
            </h2>
            <p>Acesse sua conta agora mesmo.</p>
          </WelcomeText>

          <LoginForm>
            <input
              type="email"
              value={email}
              onChange={handleEmailInput}
              placeholder="Digite seu email"
            />
            <input
              type="password"
              value={password}
              onChange={handlePassInput}
              placeholder="Digite sua senha"
            />
            <PasswordReset>
              <Link to="/recoverPassword">Esqueceu sua senha?</Link>
            </PasswordReset>
            <LoginButton onClick={handleLogin}>Entrar</LoginButton>
            ou
            <GoogleButton>
              <GoogleLogo />
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
};

export default Login;
