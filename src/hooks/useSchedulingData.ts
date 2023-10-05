import { toast } from "react-toastify";
import { api } from "./useApi";
import { useScheduling } from "./useScheduling";
import { useState, useEffect } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { useAllPsychologists } from "./useAllPsychologists";
import {
  formattedCurrentDate,
  isValidScheduleTime,
} from "../common/functions/formatTime";

export const useSchedulingData = () => {
  const { scheduleAppointment } = useScheduling();
  const currentUser = useCurrentUser();
  const psychologists = useAllPsychologists();

  const [loading, setLoading] = useState(false);
  const [unavailableSlots, setUnavailableSlots] = useState([]);
  const [formData, setFormData] = useState(
    initialFormData(currentUser, psychologists)
  );

  useEffect(() => {
    updateFormDataWithCurrentUser(currentUser, psychologists, setFormData);
    fetchUnavailableSlots(formData.select_date_time, setUnavailableSlots);
  }, [currentUser, psychologists, formData.select_date_time]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!isValidScheduleTime(formData.select_date_time)) {
      toast.error(
        "Por favor, selecione um horário entre 8h e 16h de segunda a sexta-feira."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await scheduleAppointment(formData);
      if (response && response.data && response.data.message) {
        if (response.data.status === "success" || !response.data.error) {
          toast.success(response.data.message);
        } else {
          throw new Error(
            response.data.message || "Invalid response from the server."
          );
        }
      }
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error: any) => {
    const errorMessage =
      error.response?.data.message ?? "Erro ao realizar agendamento.";
    toast.error(errorMessage);
  };

  return {
    loading,
    formData,
    psychologists,
    unavailableSlots,
    handleChange,
    handleSubmit,
  };
};

const initialFormData = (currentUser: any, psychologists: any) => ({
  duration: 1,
  select_date_time: formattedCurrentDate,
  patient_id: currentUser?.user_id || "",
  psychologist_id: psychologists?.[0]?.user_id || "",
  registrant_name: currentUser?.user_name || "",
});

const updateFormDataWithCurrentUser = (
  currentUser: any,
  psychologists: any,
  setFormData: (value: any) => void
) => {
  if (currentUser) {
    setFormData((prev: any) => ({
      ...prev,
      patient_id: currentUser.user_id,
      registrant_name: currentUser.user_name,
      psychologist_id:
        prev.psychologist_id || psychologists?.[0]?.user_id || "",
    }));
  }
};

const fetchUnavailableSlots = async (
  selectedDate: string,
  setUnavailableSlots: (value: any) => void
) => {
  try {
    const response = await api.get("/scheduling/availability", {
      params: {
        date: selectedDate,
      },
    });
    setUnavailableSlots(response.data);
  } catch (error) {
    toast.error("Failed to fetch unavailable slots");
  }
};
