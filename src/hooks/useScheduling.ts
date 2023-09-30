import { toast } from "react-toastify";
import { api } from "./useApi";
import { Scheduling } from "../interface/scheduling.interface";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { useAllPsychologists } from "./useAllPsychologists";
import { formattedCurrentDate } from "../common/functions/formatTime";

export const useScheduling = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const scheduleAppointment = async (scheduling: Scheduling) => {
    setLoading(true);
    try {
      const response = await api.post("/scheduling", scheduling);
      navigate("/home");
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
    fetchUnavailableSlots(formData, setUnavailableSlots);
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
    try {
      const response = await scheduleAppointment(formData);
      toast.success(response.data.message);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
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
      psychologist_id: psychologists?.[0]?.user_id || "",
    }));
  }
};

const fetchUnavailableSlots = async (
  formData: any,
  setUnavailableSlots: (value: any) => void
) => {
  try {
    const selectedDate = formData.select_date_time.split("T")[0];
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

const handleError = (error: any) => {
  const errorMessage =
    error.response?.data.message ?? "Erro ao realizar agendamento.";
  toast.error(errorMessage);
};
