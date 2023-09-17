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
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../hooks/useApi";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../../../interface/error.interface";

export const RecoverPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const sendRecoveryCode = async () => {
    try {
      await api.post(`/user/recover-code?email=${encodeURIComponent(email)}`);
      toast.success("Código de recuperação enviado com sucesso!");
      navigate("/reset-pass");
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error: unknown) => {
    const axiosErr = error as AxiosError<ErrorResponse>;

    const errorMessage =
      axiosErr?.response?.data?.message ||
      "Erro ao enviar o código de recuperação.";

    console.error("Detalhes do erro:", axiosErr.response || error);
    toast.error(errorMessage);
  };

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
            <button type="submit">Envie o código</button>
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
      <ToastContainer />
    </LoginBackground>
  );
};
