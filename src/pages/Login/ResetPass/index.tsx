import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LoginButton, LoginForm, Resend, WelcomeText } from "./style";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../../components/Layout/Container/Login/style";
import { LogoHelpsi } from "../../../assets/imgComponents/Logo";
import { api } from "../../../hooks/useApi";
import { ResetPassInterface } from "../../../interface/resetPass.interface";
import { AxiosError } from "axios";

type ErrorResponse = {
  message: string;
};

const ResetPass: React.FC = () => {
  const [form, setForm] = useState<ResetPassInterface>({
    code: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendCode = async () => {
    try {
      const { code, password, email } = form;
      await api.post(
        `/user/resetPass?code=${code}&password=${encodeURIComponent(
          password
        )}&email=${encodeURIComponent(email)}`
      );
      toast.success("Senha alterada com sucesso");
      navigate("/login");
    } catch (error) {
      handleError(error);
    }
  };

  const sendRecoveryCode = async () => {
    try {
      await api.post(
        `/user/recover-code?email=${encodeURIComponent(form.email)}`
      );
      toast.success("Código de recuperação enviado com sucesso!");
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

  return (
    <>
      <Container>
        <LeftContainer>
          <Logo>
            <LogoHelpsi />
          </Logo>
          <WelcomeText>
            <h2>Verificando...</h2>
            <p>
              Digite o código de verificação que acabamos de enviar em seu
              endereço de e-mail.
            </p>
          </WelcomeText>
          <LoginForm>
            <input
              type="text"
              placeholder="Digite o código"
              value={form.code}
              onChange={handleChange}
              name="code"
            />
            <input
              type="password"
              placeholder="Digite sua nova senha"
              value={form.password}
              onChange={handleChange}
              name="password"
            />
            <input
              type="email"
              placeholder="Digite seu email"
              value={form.email}
              onChange={handleChange}
              name="email"
            />
          </LoginForm>
          <LoginButton onClick={sendCode}>Alterar senha</LoginButton>
          <Resend onClick={sendRecoveryCode}>
            Não recebeu o código? Digite seu email clique em 
            <strong>Reenviar</strong>
          </Resend>
        </LeftContainer>
        <MainContainer />
      </Container>
      <ToastContainer />
    </>
  );
};

export default ResetPass;
