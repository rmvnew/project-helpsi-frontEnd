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
import { ChangeEvent } from "react";
import useRecovery from "../../../../hooks/useRecoverPass";

export const RecoverPass = () => {
  const { email, setEmail, isSending, sendRecoveryCode } = useRecovery();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendRecoveryCode();
  };
  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={logo} alt="logo da empresa" />
          <TextContainer>
            <h2>Você esqueceu sua senha?</h2>
            <p>
              Não se preocupe! Acontece. Por favor, insira o endereço de e-mail
              vinculado à sua conta
            </p>
          </TextContainer>
          <Form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">
              {isSending ? "Enviando..." : "Envie o código"}
            </button>
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
  );
};
