import { useCallback, useState } from "react";
import { api } from "./useApi";
import { User } from "../types/User";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const getUsers = useCallback(async () => {
    try {
      const response = await api.get("/user");
      if (response.data) {
        setUsers(response.data.items);
      }
    } catch (error) {
      console.error(`Ocorreu um erro ao buscar usuários:`, error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, getUsers };
};