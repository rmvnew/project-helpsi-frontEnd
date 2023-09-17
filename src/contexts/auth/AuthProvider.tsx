import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const api = useApi();
  const storageData = localStorage.getItem("authToken");

  useEffect(() => {
    if (storageData) {
      try {
        const decodedToken: any = jwtDecode(storageData);

        if (decodedToken.exp * 1000 > Date.now()) {
          
          const userData: User = {
            name: decodedToken.name,
            email: decodedToken.email,
            
          };
          setUser(userData);
        } else {
          // Token is expired
          setUser(null);
          localStorage.removeItem("authToken");
          toast.error("Sua sessão expirou. Por favor, faça login novamente.");
        }
      } catch (error) {
        
        setUser(null);
        localStorage.removeItem("authToken");
        toast.error("Erro ao decodificar o token.");
      }
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [storageData]);

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

    return {
      message: message,
      code: code,
      status: false,
    };
  };

  const signinWithGoogle = async (idToken: string) => {
    const data = await api.signinWithGoogle(idToken);

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

    let message = data && data.message ? data.message : "Error: No message provided";
    let code = data ? data.code : 0;

    return {
      message: message,
      code: code,
      status: false,
    };
  };

  const signout = async () => {
    setUser(null);
    setToken("");

    localStorage.removeItem("userLogin");
    localStorage.removeItem("userProfile");
    await api.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout, loading, signinWithGoogle }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};
