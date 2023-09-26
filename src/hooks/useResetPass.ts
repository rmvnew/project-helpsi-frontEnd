import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./useApi";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ResetPassInterface } from "../interface/resetPass.interface";

type ErrorResponse = {
  message: string;
};

const useResetPassword = () => {
  const [form, setForm] = useState<ResetPassInterface>({
    code: "",
    password: "",
    email: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendCode = async () => {
    setIsResetting(true);
    try {
      const { code, password, email } = form;

      if (password !== confirmPassword) {
        toast.error("A senha e a confirmação da senha não coincidem.");
        return;
      }

      await api.post(
        `/user/resetPass?code=${code}&password=${encodeURIComponent(
          password
        )}&email=${encodeURIComponent(email)}`
      );

      toast.success("Senha alterada com sucesso");
      navigate("/");
    } catch (error) {
      handleError(error);
    } finally {
      setIsResetting(false);
    }
  };

  const sendRecoveryCode = async () => {
    if (!form.email) {
      toast.info("Por favor, preencha o campo de email e tente novamente.");
      return;
    }

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

  return {
    form,
    setForm,
    confirmPassword,
    setConfirmPassword,
    isResetting,
    handleChange,
    sendCode,
    sendRecoveryCode,
  };
};

export default useResetPassword;
