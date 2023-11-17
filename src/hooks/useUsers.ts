import { useEffect, useState, useCallback } from "react";
import { useProfiles } from "./useProfiles";
import { useSpecialties } from "./useSpecialties";
import { api } from "./useApi";
import { toast } from "react-toastify";
import { User } from "../interface/user.interface";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [paginationMeta, setPaginationMeta] = useState({
    currentPage: 1,
    totalPages: 1,
    itemCount: 0,
  });

  const { profiles, getProfiles } = useProfiles();
  const { specialties, getSpecialties } = useSpecialties();

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);
  const [deletingUserId, setDeletingUserId] = useState<string | undefined>(
    undefined
  );
  const [page, setPage] = useState<number>(1);

  const getUsers = useCallback(
    async (searchTerm = "", limit = 5) => {
      try {
        const response = await api.get("/user", {
          params: {
            page,
            user_name: searchTerm,
            limit,
          },
        });

        if (response.data) {
          setUsers(response.data.items);

          setPaginationMeta({
            currentPage: response.data.meta.currentPage,
            totalPages: response.data.meta.totalPages,
            itemCount: response.data.meta.itemCount,
          });
        }
      } catch (error) {
        console.error(`Ocorreu um erro ao buscar usuários:`, error);
      } finally {
        setLoading(false);
      }
    },
    [page]
  );

  const handleSubmit = async (formData: User) => {
    try {
      if (editingUser) {
        await api.put(`/user/${editingUser.user_id}`, formData);
        toast.success("Usuário editado com sucesso!");
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
    getUsers,
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
    deletingUserId,
    setDeletingUserId,
    paginationMeta,
    page,
    setPage,
  };
};
