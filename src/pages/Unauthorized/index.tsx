import React from 'react';
import styled from "styled-components";
import unauthorized from "../../assets/img/unauthorized.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Message = styled.h2`
  margin: 20px 0;
  color: var(--bg-dark);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const StyledImage = styled.img`
  width: 700px;
  max-width: 90%; 

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 300px; 
  }
`;

const BackButton = styled.button`
  margin-top: 50px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--bg-primary);
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--bg-hover-primary);
  }

  @media (max-width: 480px) {
    padding: 8px 16px; 
    font-size: 14px; 
  }
`;

const Unauthorized = () => {
  return (
    <Container>
      <StyledImage src={unauthorized} alt="Acesso não autorizado" />
      <Message>Acesso não autorizado.</Message>
      <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
    </Container>
  );
};

export default Unauthorized;
