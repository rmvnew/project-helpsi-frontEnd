import styled from "styled-components";
import pageNotFound from "../../assets/img/pageNotFound.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledImage = styled.img`
  width: 350px;
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

const NotFound = () => {
  return (
    <Container>
      <StyledImage src={pageNotFound} alt="Page Not Found" />
      <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
    </Container>
  );
};

export default NotFound;
