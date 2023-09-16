import logo from "../../../../assets/img/logo.svg";
import bonecos from "../../../../assets/img/Psychologist.svg";
import LockIcon from "@mui/icons-material/Lock";
import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
  Span,
  TextContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";

import { Form } from "./styled";

export const RecoverPass = () => {
  return (
    <>
      <LoginBackground>
        <LoginContainer>
          <FormGroup>
            <img src={logo} alt="logo da empresa" />
            <TextContainer>
              <h2>Você esqueceu sua senha?</h2>
              <p>
                Não se preocupe! Acontece. Por favor, insira o endereço de
                e-mail vinculado à sua conta
              </p>
            </TextContainer>
            <Form>
              <input type="text" placeholder="Digite seu email" />
              <button>Envie o código</button>
            </Form>
            <Span>
              <LockIcon />
              Dados protegidos
            </Span>
          </FormGroup>
          <Image>
            <img src={bonecos} alt="" />
          </Image>
        </LoginContainer>
      </LoginBackground>
    </>
  );
};
