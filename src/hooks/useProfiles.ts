import { useCallback, useState } from "react";
import { api } from "./useApi";
import { Profile } from "../interface/profile.interface";

export const useProfiles = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const getProfiles = useCallback(async () => {
    try {
      const response = await api.get("/profile");
      if (response.data) {
        setProfiles(response.data);
      }
    } catch (error) {
      console.error(`Ocorreu um erro ao buscar perfis:`, error);
    }
  }, []);

  return { profiles, getProfiles };
};
