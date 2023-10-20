import { useCallback, useState } from "react";
import { api } from "./useApi";
import { Specialty } from "../interface/specialty.interface";

export const useSpecialties = () => {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);

  const getSpecialties = useCallback(async () => {
    try {
      const response = await api.get("/specialty");
      if (response.data) {
        setSpecialties(response.data);
      }
    } catch (error) {
      console.error(`Ocorreu um erro ao buscar especialidades:`, error);
    }
  }, []);

  return { specialties, getSpecialties };
};
