import TextField from "@mui/material/TextField";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import { StyledSubmitButton } from "../PatientDetails/styled";
import { GraphicContainer, Title } from "./styled";
import { useState, ChangeEvent } from "react";
import { api } from "../../../hooks/useApi";

const Graphic = () => {
  const [inputText, setInputText] = useState("");
  const [emotionResult, setEmotionResult] = useState<any>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await api.get("/diary-entry/emotion", {
        params: {
          text: inputText,
        },
      });

      setEmotionResult(response.data);
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
  };

  return (
    <Body>
      <Header />
      <GraphicContainer>
        <Title>Grafico de emoções</Title>
        <TextField
          label="Digite algo"
          variant="outlined"
          value={inputText}
          onChange={handleInputChange}
        />
        <StyledSubmitButton onClick={handleButtonClick}>
          Gerar emoções
        </StyledSubmitButton>
        {emotionResult && (
          <div>
            <h3>Resultado da Emoção:</h3>
            <pre>{JSON.stringify(emotionResult, null, 2)}</pre>
          </div>
        )}
      </GraphicContainer>
    </Body>
  );
};

export default Graphic;
