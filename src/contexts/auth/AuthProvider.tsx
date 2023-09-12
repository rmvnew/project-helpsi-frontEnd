import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);  // Adicione o estado de carregamento aqui
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
      setLoading(false); // defina o carregamento como false após validar o token
    };
    validateToken();
  }, [api, storageData]);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);

    if (data && data.status === undefined) {
      setUser(data);
      setToken(data.access_token);

      localStorage.setItem("userLogin", data.login);
      localStorage.setItem("userProfile", data.profile);

      return {
        message: "pass",
        code: 200,
        status: true,
      };
    }

    let message =
      data && data.message ? data.message : "Error: No message provided";
    let code = data ? data.code : 0;

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
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout, loading }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
