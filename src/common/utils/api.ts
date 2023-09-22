import { api } from "../../hooks/useApi";

export const fetchUserInfo = async () => {
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
