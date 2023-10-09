import { useState, useEffect } from "react";
import { api } from "./useApi";
import { AppointmentData } from "../types/Appointment";
import { getNextDay } from "../common/functions/formatString";

const useSchedule = (userId: string, date: string, nextDay: string) => {
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSchedule = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/scheduling`, {
          params: {
            psychologist_id: userId,
            start_time: date,
            end_time: getNextDay(date),
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
  }, [userId, date, nextDay]);

  return { appointments, isLoading, error };
};

export default useSchedule;
