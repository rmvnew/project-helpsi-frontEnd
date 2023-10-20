import { useEffect, useState } from "react";
import { useProfiles } from "./useProfiles";
import { useUsers } from "./useUsers";
import { useSpecialties } from "./useSpecialties";

import { api } from "./useApi";
import { toast } from "react-toastify";
import { User } from "../interface/user.interface";

export const useAdmin = () => {
  const { users, getUsers, loading } = useUsers();
  const { profiles, getProfiles } = useProfiles();
  const { specialties, getSpecialties } = useSpecialties();

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);

  const handleSubmit = async (formData: User) => {
    try {
      if (editingUser) {
        await api.put(`/user/${editingUser.user_id}`, formData);
        toast.success("Usuário editado com sucesso!");
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
    }
  };

  const initiateEdit = (user: User | undefined) => {
    setEditingUser(user);
    setShowForm(true);
  };

  useEffect(() => {
    getUsers();
    getProfiles();
    getSpecialties();
  }, [getProfiles, getUsers, getSpecialties]);

  return {
    search,
    setSearch,
    users,
    profiles,
    specialties,
    loading,
    showForm,
    setShowForm,
    editingUser,
    setEditingUser,
    handleSubmit,
    initiateEdit,
  };
};
