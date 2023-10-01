import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";
import { Payload } from "../../types/Payload";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(true);
  const api = useApi();

  const handleApiResponse = (data: any) => {
    if (data && !data.status) {
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

    const { message = "Error: No message provided", code = 0 } = data || {};
    return {
      message,
      code,
      status: false,
    };
  };

  const clearUserLocalStorage = () => {
    ["authToken", "userLogin", "userProfile"].forEach((item) => {
      localStorage.removeItem(item);
    });
  };

  useEffect(() => {
    const storageData = localStorage.getItem("authToken");
    if (storageData) {
      try {
        const decodedToken: any = jwtDecode(storageData);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser({
            name: decodedToken.name,
            email: decodedToken.email,
          });
        } else {
          clearUserLocalStorage();
          toast.error("Sua sessão expirou. Por favor, faça login novamente.");
        }
      } catch (error) {
        clearUserLocalStorage();
        toast.error("Erro ao decodificar o token.");
      }
    }
    setLoading(false);
  }, []);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    return handleApiResponse(data);
  };

  const signinWithGoogle = async (idToken: string) => {
    const data = await api.signinWithGoogle(idToken);
    return handleApiResponse(data);
  };

  const signout = async () => {
    setUser(null);
    clearUserLocalStorage();
    await api.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider
      value={{ user, signin, signout, loading, signinWithGoogle }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
