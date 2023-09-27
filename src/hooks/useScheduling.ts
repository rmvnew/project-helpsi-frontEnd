import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "./useApi";
import { Scheduling } from "../interface/scheduling.interface";

export const useScheduling = () => {
  const [loading, setLoading] = useState(false);

  const scheduleAppointment = async (scheduling: Scheduling) => {
    setLoading(true);
    try {
      const response = await api.post(
        "/scheduling",
        scheduling,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const message =
        response.data.message ?? "Agendamento realizado com sucesso!";
      toast.success(message);
      setLoading(false);
      return response;
    } catch (error) {
      const errorMessage =
        error.response?.data.message ?? "Erro ao realizar agendamento.";
      toast.error(errorMessage);
      setLoading(false);
      throw error;
    }
  };

  return { scheduleAppointment, loading };
};
