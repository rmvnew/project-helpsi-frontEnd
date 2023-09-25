import { ChangeEvent } from "react";
import { useContext, useState } from "../common/utils/imports/signin";
import {
  AuthContext,
  toast,
  useNavigate,
} from "../common/utils/imports/signin";
import { api } from "./useApi";

export const useLogin = () => {
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

  const fetchUserInfo = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await api.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
      return null;
    }
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    const { email, password } = form;
    if (email && password) {
      const isLogged = await auth.signin(email, password);

      if (isLogged && isLogged.status) {
        const userInfo = await fetchUserInfo();

        if (userInfo && userInfo.user_id) {
          const userProfile = localStorage.getItem("userProfile");

          if (userProfile === "PATIENT") {
            navigate(`/home/${userInfo.user_id}`);
          } else if (userProfile === "PSYCHOLOGIST") {
            navigate(`/psy/home/${userInfo.user_id}`);
          } else if (userProfile === "ADMIN") {
            navigate(`/admin/${userInfo.user_id}`);
          } else {
            toast.error("Perfil de usuário desconhecido.");
          }

          toast.success(`Bem vindo !!!`);
        } else {
          toast.error("Erro ao buscar informações do usuário.");
        }
      } else {
        toast.error("Erro ao fazer login. Verifique suas credenciais.");
      }
    }
    setIsLoggingIn(false);
  };

  return {
    form,
    setForm,
    isLoggingIn,
    handleInputChange,
    handleFormSubmit,
  };
};
