import { useState, ChangeEvent, KeyboardEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { LogoHelpsi } from "../../../assets/imgComponents/Logo";
import { GoogleLogo } from "../../../assets/imgComponents/GoogleLogo";
import {
  Container,
  LeftContainer,
  MainContainer,
} from "../../../components/Layout/Container/Login/style";
import {
  GoogleButton,
  LoginButton,
  LoginForm,
  LoginOptions,
  PasswordReset,
  WelcomeText,
} from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    const { email, password } = form;
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        toast.error("Erro ao fazer login. Verifique suas credenciais.", {});
      }
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

          <LoginForm onKeyDown={handleKeyDown}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Digite seu email"
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
            />
            <PasswordReset>
              <Link to="/recoverpass">Esqueceu sua senha?</Link>
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
                <Link to="/signup">Registre-se aqui</Link>
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
