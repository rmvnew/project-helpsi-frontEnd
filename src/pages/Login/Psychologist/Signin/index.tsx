import Logo from "../../../../assets/img/logo.svg";
import Google from "../../../../assets/img/google.svg";
import Bonecos from "../../../../assets/img/Psychologist.svg";
import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";
import { Link, useNavigate } from "react-router-dom";
import { Form, IconeGoogle, Span, TextContainer } from "./styled";
import { ToastContainer, toast } from "react-toastify";
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/auth/AuthContext";

export const SignInPsy = () => {
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
        navigate("/home/patient");
      } else {
        toast.error("Erro ao fazer login. Verifique suas credenciais.", {});
      }
    }

    setIsLoggingIn(false);
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
          <IconeGoogle>
            <img src={Google} alt="Ícone do Google" />
            <span>Entrar com o Google</span>
          </IconeGoogle>
          <Span>
            Não tem uma conta?
            <Link to="/signup/psy"> Registre-se aqui</Link>
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
