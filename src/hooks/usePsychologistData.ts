import { useState, useEffect } from "react";
import { api } from "./useApi";
import { Psychologist } from "../interface/psychologist.interface";

const usePsychologistById = (userId: string) => {
  const [psychologistData, setPsychologistData] = useState<Psychologist | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPsychologistData = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/user/psychologist/${userId}`);
        setPsychologistData(data);
      } catch (err) {
        setError("Failed to load psychologist data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      getPsychologistData();
    }
  }, [userId]);

  return { psychologistData, isLoading, error };
};

export default usePsychologistById;
