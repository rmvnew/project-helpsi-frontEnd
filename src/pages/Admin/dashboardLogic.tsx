import { useState, useEffect, useCallback } from "react";
import { api } from "../../hooks/useApi";
import { toast } from "react-toastify";
import { User } from "../../types/User";
import { Profile } from "../../types/Profile";

export const useDashboardLogic = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const fetchData = useCallback(async (endpoint: string) => {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Ocorreu um erro ao buscar ${endpoint}:`, error);
      return null;
    }
  }, []);

  const getUsers = useCallback(async () => {
    const data = await fetchData("/user");
    if (data) {
      setUsers(data.items);
    }
    setLoading(false);
  }, [fetchData]);

  const getProfiles = useCallback(async () => {
    const data = await fetchData("/profile");
    if (data) {
      setProfiles(data);
    }
  }, [fetchData]);

  useEffect(() => {
    getUsers();
    getProfiles();
  }, [getUsers, getProfiles]);

  const handleSubmit = async (formData: any) => {
    try {
      if (editingUser) {
        await api.put(`/user/${editingUser.user_id}`, formData);
        toast.success("Usuário editado com sucesso!");
        setEditingUser(null);
        return true;
      } else {
        await api.post("/user", formData);
        toast.success("Usuário criado com sucesso!");
      }
      getUsers();
    } catch (error: any) {
      const message =
        error?.response?.data?.message ??
        (editingUser ? "Erro ao editar" : "Erro ao cadastrar");
      toast.error(message);
      return false;
    }
  };

  const initiateEdit = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  return {
    search,
    setSearch,
    users,
    profiles,
    loading,
    showForm,
    setShowForm,
    editingUser,
    setEditingUser,
    handleSubmit,
    initiateEdit,
  };
};
