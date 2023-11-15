import { useState } from "react";
import { Container, TextArea, Title } from "./styled";
import { api } from "../../../../hooks/useApi";
import { Btn } from "../styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EmotionsDiary = () => {
  const [emotionText, setEmotionText] = useState("");
  const [patientDetailsId, setPatientDetailsId] = useState("");

  const handleSaveEntry = async () => {
    try {
      await api.post("/diary-entry", {
        text: emotionText,
        patient_details_id: patientDetailsId,
      });

      setEmotionText("");
      setPatientDetailsId("");

      toast.success("Diário salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar entrada no diário:", error);
      toast.error("Erro ao salvar entrada no diário");
    }
  };

  return (
    <Container>
      <Title>Meu Diário de emoções</Title>

      <TextArea
        placeholder="Como você está se sentindo hoje?"
        value={emotionText}
        onChange={(e) => setEmotionText(e.target.value)}
      ></TextArea>

      <Btn onClick={handleSaveEntry}>Salvar</Btn>

      <ToastContainer />
    </Container>
  );
};
