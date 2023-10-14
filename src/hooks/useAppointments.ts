import { useState, useEffect } from "react";
import { api } from "./useApi";
import { AppointmentData } from "../interface/appointment.interface";

const useAppointments = (userId: string, date: string) => {
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSchedule = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/scheduling`, {
          params: {
            patient_id: userId,
            start_time: date,
          },
        });
        setAppointments(data.items || []);
      } catch (err) {
        setError("Failed to fetch schedule. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      getSchedule();
    }
  }, [userId, date]);

  return { appointments, isLoading, error };
};

export default useAppointments;
