import { useState } from "react";
import Logo from "../../../../assets/img/logo.svg";
import Bonecos from "../../../../assets/img/Psychologist.svg";
import {
  FormGroup,
  Image,
  LoginBackground,
  LoginContainer,
  TextContainer,
} from "../../../../components/Layout/Container/ContainerLogin/styled";
import { Form } from "../RecoverPass/styled";
import { Resend } from "./styled";
import { ResetPassInterface } from "../../../../interface/resetPass.interface";
import { useNavigate } from "react-router-dom";
import { api } from "../../../../hooks/useApi";
import { ToastContainer, toast } from "react-toastify";
import { AxiosError } from "axios";

type ErrorResponse = {
  message: string;
};

export const ResetPass = () => {
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
      navigate("/login/start");
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
      await api.post(`/user/recover-code?email=${encodeURIComponent(form.email)}`);
      toast.success("Código de recuperação enviado com sucesso!");
    } catch (error) {
      handleError(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendCode();
  };

  const handleError = (error: unknown) => {
    const axiosErr = error as AxiosError<ErrorResponse>;
    const errorMessage = axiosErr?.response?.data?.message || "Erro ao enviar o código de recuperação.";
    console.error("Detalhes do erro:", axiosErr.response || error);
    toast.error(errorMessage);
  };

  return (
    <LoginBackground>
      <LoginContainer>
        <FormGroup>
          <img src={Logo} alt="Logo Helpsi" />
          <TextContainer>
            <h2>Altere sua senha</h2>
            <p>
              Digite o código de verificação que acabamos de enviar em seu
              endereço de e-mail.
            </p>
          </TextContainer>
          <Form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Digite o código"
              value={form.code}
              onChange={handleChange}
              name="code"
              required
            />
            <input
              type="password"
              placeholder="Digite sua nova senha"
              value={form.password}
              onChange={handleChange}
              name="password"
              required
            />
            <input
              type="password"
              placeholder="Corfirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Digite seu email"
              value={form.email}
              onChange={handleChange}
              name="email"
              required
            />
            <button type="submit">
              {isResetting ? "Redefinindo..." : "Redefinir senha"}
            </button>
          </Form>
          <Resend onClick={sendRecoveryCode}>
            Não recebeu o código? Digite seu email e clique em
            <strong> Reenviar</strong>
          </Resend>
        </FormGroup>
        <Image>
          <img src={Bonecos} alt="Psychologist" />
        </Image>
      </LoginContainer>
      <ToastContainer />
    </LoginBackground>
  );
};
