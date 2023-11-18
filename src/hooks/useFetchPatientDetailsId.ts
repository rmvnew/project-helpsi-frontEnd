import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useCurrentUser } from "./useCurrentUser";
import { api } from "./useApi";

const useFetchPatientDetailsId = (editedText: string) => {
  const currentUser = useCurrentUser();
  const [patientDetailsId, setPatientDetailsId] = useState("");

  useEffect(() => {
    const fetchPatientDetailsId = async () => {
      try {
        if (currentUser && currentUser.user_id) {
          const response = await api.get("/user/one-patient", {
            params: {
              user_id: currentUser.user_id,
            },
          });

          const fetchedPatientDetailsId = response.data[0].patient_details_id;

          setPatientDetailsId(fetchedPatientDetailsId);
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do paciente:", error);
        toast.error("Erro ao obter detalhes do paciente");
      }
    };

    if (currentUser && editedText) {
      fetchPatientDetailsId();
    }
  }, [currentUser, editedText]);

  return patientDetailsId;
};

export default useFetchPatientDetailsId;
