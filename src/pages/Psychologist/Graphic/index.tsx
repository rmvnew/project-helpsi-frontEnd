import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import TextField from "@mui/material/TextField";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import { StyledSubmitButton } from "../PatientDetails/styled";
import { Container, GraphicContainer, Title } from "./styled";
import { useState, ChangeEvent } from "react";
import { api } from "../../../hooks/useApi";

const Graphic = () => {
  const [inputText, setInputText] = useState("");
  const [emotionResult, setEmotionResult] = useState<any>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<"bar", number[], string> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current && emotionResult) {
      const ctx = canvasRef.current.getContext("2d");

      if (ctx) {
        const emotions = Object.keys(emotionResult.emotion);
        const data = emotions.map((emotion) =>
          parseFloat(emotionResult.emotion[emotion])
        );

        if (chartRef.current) {
          chartRef.current.data.labels = emotions;
          chartRef.current.data.datasets[0].data = data;
          chartRef.current.update();
        } else {
          chartRef.current = new Chart(ctx, {
            type: "bar",
            data: {
              labels: emotions,
              datasets: [
                {
                  type: "bar",
                  label: "Dados de emoções",
                  data: data,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(201, 203, 207, 0.2)",
                  ],
                  borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(201, 203, 207)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            },
          });
        }
      }
    }
  }, [emotionResult]);

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
      <Container>
        <Title>Grafico de emoções</Title>
        <TextField
          label="Digite algo"
          variant="outlined"
          value={inputText}
          onChange={handleInputChange}
        />
        <StyledSubmitButton onClick={handleButtonClick}>
          Mostrar gráfico
        </StyledSubmitButton>
        <GraphicContainer>
          <canvas ref={canvasRef} width={900} height={900}></canvas>
        </GraphicContainer>
      </Container>
    </Body>
  );
};

export default Graphic;
