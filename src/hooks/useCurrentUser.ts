import { useEffect, useState } from "react";
import { api } from "./useApi";
import { toast } from "react-toastify";
import { User } from "../interface/user.interface";


export const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);


  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await api.get("user/me");
        setCurrentUser(response.data);
        console.log(response.data)
      } catch (error) {
        toast.error("Erro ao buscar o usuário logado.");
        console.error("Erro ao buscar o usuário logado:", error);
      }
    };

    getCurrentUser();
  }, []);

  return currentUser;
};
