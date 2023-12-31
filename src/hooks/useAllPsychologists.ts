import { useEffect, useState } from "react";
import { api } from "./useApi";
import { toast } from "react-toastify";
import { Psychologist } from "../interface/psychologist.interface";

export const useAllPsychologists = () => {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);

  useEffect(() => {
    const getPsychologists = async () => {
      try {
        const response = await api.get("user/allPsychologists");

        setPsychologists(response.data);
      } catch (error) {
        toast.error("Erro ao buscar psicólogos.");
        console.error("Erro ao buscar psicólogos:", error);
      }
    };

    getPsychologists();
  }, []);

  return psychologists;
};
