import React from "react";
import { Container, TextArea, Title } from "./styled";

const EmotionsDiary: React.FC = () => {
  return (
    <Container>
      <Title>Meu Diário de emoções</Title>

      <TextArea placeholder="Como você está se sentindo hoje?"></TextArea>
    </Container>
  );
};

export default EmotionsDiary;
