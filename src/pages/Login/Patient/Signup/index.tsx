import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
  Span,
  TextContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";
import Logo from "../../../../assets/img/logo.svg";
import Bonecos from "../../../../assets/img/Psychologist.svg";
import LockIcon from "@mui/icons-material/Lock";
import { Form } from "./styled";

export const SignUp = () => {
  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={Logo} alt="Logo Helpsi" />
          <TextContainer>
            <h2>Informações de acesso</h2>
          </TextContainer>
          <Form>
            <input type="text" placeholder="Nome completo" required />
            <input type="number" placeholder="Telefone (WhatsApp)" required />
            <input type="email" placeholder="Digite seu email" required />
            <input type="password" placeholder="Crie uma senha" required />
            <input type="password" placeholder="Confirme a senha" required />
            <p>
              Ao clicar em continuar , você estará concordando com o nosso{" "}
              <strong>termo de uso.</strong>
            </p>
            <button type="submit">Aceitar e continuar</button>
          </Form>
          <Span>
            <LockIcon />
            Dados protegidos
          </Span>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="bonecos" />
        </Image>
      </LoginContainer>
    </LoginBackground>
  );
};
