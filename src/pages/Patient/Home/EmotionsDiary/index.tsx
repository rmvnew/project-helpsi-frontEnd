import { useState, useEffect } from "react";
import { Container, Title } from "./styled";
import { api } from "../../../../hooks/useApi";
import { Btn } from "../styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledTextarea } from "../../../Psychologist/Graphic/styled";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";

export const EmotionsDiary = () => {
  const [emotionText, setEmotionText] = useState("");
  const [patientDetailsId, setPatientDetailsId] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchPatientDetailsId = async () => {
      try {
        if (currentUser && currentUser.user_id) {
          const response = await api.get("/user/one-patient", {
            params: {
              user_id: currentUser.user_id,
            },
          });

          if (response.data.length > 0) {
            const fetchedPatientDetailsId = response.data[0].patient_details_id;
            setPatientDetailsId(fetchedPatientDetailsId);
          }
        }
      } catch (error) {
        console.error("Erro ao obter detalhes do paciente:", error);
        toast.error("Erro ao obter detalhes do paciente");
      }
    };

    if (currentUser) {
      fetchPatientDetailsId();
    }
  }, [currentUser]);

  const handleSaveEntry = async () => {
    try {
      await api.post("/diary-entry", {
        text: emotionText,
        patient_details_id: patientDetailsId,
      });

      setEmotionText("");

      toast.success("Diário salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar entrada no diário:", error);
      toast.error("Erro ao salvar entrada no diário");
    }
  };

  return (
    <Container>
      <Title>Meu Diário de emoções</Title>

      <StyledTextarea
        aria-label="Digite algo"
        placeholder="Digite algo"
        value={emotionText}
        onChange={(e) => setEmotionText(e.target.value)}
      />

      <Btn onClick={handleSaveEntry}>Salvar</Btn>

      <ToastContainer />
    </Container>
  );
};
