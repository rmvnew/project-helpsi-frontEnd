import bonecos from "../../../../assets/img/Psychologist.svg";
import LockIcon from "@mui/icons-material/Lock";

import {
  FormGroup,
  Image,
  LoginContainer,
  Span,
  TextContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";

import { Form } from "./styled";
import { ChangeEvent } from "react";
import useRecovery from "../../../../hooks/useRecoverPass";
import { LoginBackground } from "../../../../components/Layout/Container/ContainerLogin/background";
import { StyledInput } from "../../../../components/Form/styledForm";
import { isValidEmail } from "../../../../common/utils/validade";

export const RecoverPass = () => {
  const { email, setEmail, isSending, sendRecoveryCode } = useRecovery();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendRecoveryCode();
  };

  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={bonecos} alt="Logo da empresa" />
          <TextContainer>
            <h2>Você esqueceu sua senha?</h2>
            <p>
              Não se preocupe! Acontece. Por favor, insira o endereço de e-mail
              vinculado à sua conta
            </p>
          </TextContainer>
          <Form onSubmit={handleFormSubmit}>
            <StyledInput
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              error={!isValidEmail(email) && email !== ""}
              helperText={
                !isValidEmail(email) && email !== ""
                  ? "Por favor, insira um email válido"
                  : ""
              }
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
          <img src={bonecos} alt="Ilustração de Psicólogos" />
        </Image>
      </LoginContainer>
    </LoginBackground>
  );
};
