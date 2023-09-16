import Logo from "../../../../assets/img/logo.svg";
import Google from "../../../../assets/img/google.svg";
import Bonecos from "../../../../assets/img/Psychologist.svg";
import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
} from "../../../../components/Layout/ContainerLogin/styled";
import { Link } from "react-router-dom";
import { Form, IconeGoogle, Span, TextContainer } from "./styled";

export const SignIn = () => {
  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={Logo} alt="Logo Helpsi" />
          <TextContainer>
            <h2>Que bom te ver por aqui!</h2>
            <p>Acesse sua conta agora mesmo</p>
          </TextContainer>
          <Form>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />

            <Link to="/recover-pass">Esqueceu sua senha</Link>
            <button type="submit">
              <Link to="/home-psy">Entrar</Link>
            </button>
          </Form>
          ou
          <IconeGoogle>
            <img src={Google} alt="Ícone do Google" />
            <span>Entrar com o Google</span>
          </IconeGoogle>
          <Span>
            Não tem uma conta?
            <Link to="/signup-psy"> Registre-se aqui</Link>
          </Span>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="Psychologist" />
        </Image>
      </LoginContainer>
    </LoginBackground>
  );
};
