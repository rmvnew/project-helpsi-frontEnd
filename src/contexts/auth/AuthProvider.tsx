import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();
  const storageData = localStorage.getItem("authToken");

  useEffect(() => {
    const validateToken = async () => {
      if (storageData) {
        const data = await api.validateToken();

        if (data && data.data) {
          setUser(data.data);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    validateToken();
  }, []);

  const signin = async (email: string, password: string, twoFactorCode:string) => {
    const data = await api.signin(email, password, twoFactorCode);

    if (data && data.status === undefined) {
      setUser(data);
      setToken(data.access_token);

      localStorage.setItem("userLogin", data.login);
      localStorage.setItem("userProfile", data.profile);

      // Exibe uma notificação de sucesso ao fazer login
      toast.success("Login bem-sucedido!");

      return {
        message: "pass",
        code: 200,
        status: true,
      };
    }

    let message =
      data && data.message ? data.message : "Error: No message provided";
    let code = data ? data.code : 0;

    // Exibe uma notificação de erro ao falhar o login
    toast.error(`Erro ao fazer login: ${message}`);

    return {
      message: message,
      code: code,
      status: false,
    };
  };

  const signout = async () => {
    setUser(null);
    setToken("");
    await api.logout();

    // Exibe uma notificação ao fazer logout
    toast.info("Logout realizado com sucesso!");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
      <ToastContainer /> {/* Componente para exibir as notificações */}
    </AuthContext.Provider>
  );
};
