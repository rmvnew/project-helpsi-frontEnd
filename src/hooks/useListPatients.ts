import { useState, useEffect } from "react";
import { api } from "./useApi";
import { AppointmentData } from "../types/Appointment";

const useListPatients = (userId: string) => {
  const [listPatients, setListPatients] = useState<AppointmentData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSchedule = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/scheduling`, {
          params: {
            logged_id: userId,
          },
        });
        setListPatients(data.items || []);
      } catch (err) {
        setError("Failed to patients. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      getSchedule();
    }
  }, [userId]);

  return { listPatients, isLoading, error };
};

export default useListPatients;
