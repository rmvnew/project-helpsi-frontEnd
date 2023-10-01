import { useState } from "react";
import { api } from "./useApi";
import { AxiosError } from "axios";
import { ErrorResponse } from "../interface/error.interface";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useRecovery = () => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const sendRecoveryCode = async () => {
    setIsSending(true);
    try {
      await api.post("/user/recover-code", null, {
        params: { email: email },
      });
      localStorage.setItem("recoveryEmail", email);
      toast.success("Código de recuperação enviado com sucesso!");
      navigate("/login/reset-pass");
    } catch (error) {
      handleError(error);
    } finally {
      setIsSending(false);
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

  return {
    email,
    setEmail,
    isSending,
    sendRecoveryCode,
  };
};

export default useRecovery;
