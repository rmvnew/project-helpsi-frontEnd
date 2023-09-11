import { LoginButton, LoginForm, WelcomeText } from "./style";
import { ToastContainer, toast } from "react-toastify";
import {
  Container,
  LeftContainer,
  Logo,
  MainContainer,
} from "../../../components/Layout/Container/Login/style";
import { LogoHelpsi } from "../../../assets/imgComponents/Logo";
import { api } from "../../../hooks/useApi";
import { ChangeEvent, useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const RecoverPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const sendRecoveryCode = async () => {
    try {
      await api.post(`/user/recover-code?email=${encodeURIComponent(email)}`);
      toast.success("Código de recuperação enviado com sucesso!");
      navigate("/checkcode");
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
            <h2>Você esqueceu sua senha?</h2>
            <p>
              Não se preocupe! Acontece. Por favor, insira o endereço de e-mail
              vinculado à sua conta.
            </p>
          </WelcomeText>
          <LoginForm>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={handleEmailChange}
            />
            <LoginButton onClick={sendRecoveryCode}>Envie o código</LoginButton>
          </LoginForm>
        </LeftContainer>
        <MainContainer />
      </Container>
      <ToastContainer />
    </>
  );
};

export default RecoverPass;
