import { toast } from "react-toastify";
import { api } from "./useApi";
import { useScheduling } from "./useScheduling";
import { useState, useEffect } from "react";
import { useCurrentUser } from "./useCurrentUser";
import {
  formattedCurrentDate,
  isValidScheduleTime,
} from "../common/functions/formatTime";

export const useSchedulingData = () => {
  const { scheduleAppointment } = useScheduling();
  const currentUser = useCurrentUser();

  const [loading, setLoading] = useState(false);
  const [unavailableSlots, setUnavailableSlots] = useState<any[]>([]);
  const [formData, setFormData] = useState(initialFormData(currentUser));

  useEffect(() => {
    updateFormDataWithCurrentUser(currentUser, setFormData);
    fetchUnavailableSlots(formData.select_date, setUnavailableSlots);
  }, [currentUser, formData.select_date]);

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

    // Convertendo formData.select_date e formData.select_time para um objeto Date
    const dateParts = formData.select_date.split("-");
    const timeParts = formData.select_time.split(":");
    const dateObject = new Date(
      parseInt(dateParts[0], 10),
      parseInt(dateParts[1], 10) - 1,
      parseInt(dateParts[2], 10),
      parseInt(timeParts[0], 10),
      parseInt(timeParts[1], 10)
    );

    const combinedDateTime = dateObject.toISOString();

    if (!isValidScheduleTime(combinedDateTime)) {
      toast.error(
        "Por favor, selecione um horário entre 8h e 17h de segunda a sexta-feira."
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
    unavailableSlots,
    handleChange,
    handleSubmit,
    fetchUnavailableSlots,
  };
};

const initialFormData = (currentUser: any) => ({
  duration: 1,
  select_date: formattedCurrentDate,
  select_time: "00:00",
  patient_id: currentUser?.user_id || "",
  psychologist_id: currentUser?.basicPsychologist?.user_id || "",
  registrant_name: currentUser?.user_name || "",
});

const updateFormDataWithCurrentUser = (
  currentUser: any,
  setFormData: (value: any) => void
) => {
  if (currentUser) {
    setFormData((prev: any) => ({
      ...prev,
      patient_id: currentUser.user_id,
      registrant_name: currentUser.user_name,
      psychologist_id: currentUser?.basicPsychologist?.user_id || "",
    }));
  }
};

const fetchUnavailableSlots = async (
  selectedDate: string,
  setUnavailableSlots: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const response = await api.get("/scheduling/availability", {
      params: { date: selectedDate },
    });

    setUnavailableSlots(response.data);
  } catch (error) {
    toast.error("Failed to fetch unavailable slots");
  }
};
