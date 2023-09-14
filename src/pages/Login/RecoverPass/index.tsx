import { LoginButton, LoginForm, WelcomeText } from "./style";
import { ToastContainer, toast } from "react-toastify";
import  LogoHelpsi  from "../../../assets/img/logo.svg";
import { api } from "../../../hooks/useApi";
import { ChangeEvent, useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorResponse } from "../../../interface/error.interface";

const RecoverPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const sendRecoveryCode = async () => {
    try {
      await api.post(`/user/recover-code?email=${encodeURIComponent(email)}`);
      toast.success("Código de recuperação enviado com sucesso!");
      navigate("/resetPass");
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
      <div>
        <div>
          <div>
            <img src={LogoHelpsi} alt="Logo da empresa" />
          </div>
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
        </div>
        <div />
      </div>
      <ToastContainer />
    </>
  );
};

export default RecoverPass;
