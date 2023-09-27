import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "./useApi";
import { Scheduling } from "../interface/scheduling.interface";
import { useNavigate } from "react-router-dom";

export const useScheduling = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const scheduleAppointment = async (scheduling: Scheduling) => {
    setLoading(true);
    try {
      const response = await api.post("/scheduling", scheduling);
      navigate("/home")
      const message =
        response.data.message ?? "Agendamento realizado com sucesso!";
      toast.success(message);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return { scheduleAppointment, loading };
};
