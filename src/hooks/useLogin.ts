import { ChangeEvent } from "react";
import { useContext, useState } from "../common/utils/imports/signin";
import {
  AuthContext,
  toast,
  useNavigate,
} from "../common/utils/imports/signin";

export const useLoginFunctions = () => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
  

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    const { email, password } = form;
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged && isLogged.status) {
        navigate("/");
        toast.success(`Bem vindo !!!`);
      } else {
        toast.error("Erro ao fazer login. Verifique suas credenciais.");
      }
    }
    setIsLoggingIn(false);
  };

  const handleGoogleSuccess = async (response: any) => {
    if (response.tokenId) {
      const result = await auth.signinWithGoogle(response.tokenId);
      if (result && result.status) {
        navigate("/");
      } else {
        toast.error(result.message || "Erro ao fazer login com o Google.");
      }
    }
  };

  const handleGoogleFailure = (error: any) => {
    console.error("Erro no login com o Google:", error);
  };

  return {
    form,
    setForm,
    isLoggingIn,
    handleInputChange,
    handleFormSubmit,
    handleGoogleSuccess,
    handleGoogleFailure,
  };
};
