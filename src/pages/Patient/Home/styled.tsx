import styled from "styled-components";

export const HomePatient = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px 0;
  gap: 50px;

  @media (max-width: 998px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    gap: 20px;
  }
`;

export const Column = styled.div`
  background-color: var(--bg-primary);
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  width: 45vw;
  height: 70vh;
  border-radius: 5px;

  @media (max-width: 998px) {
    width: 85vw;
    height: 400px;
    padding: 30px 20px;
  }

  @media (max-width: 450px) {
    height: 350px;
    padding: 15px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: white;
  color: var(--bg-dark);

  h2 {
    font-size: 1.1rem;
  }

  p {
    color: red;
    text-align: center;
    font-family: sans-serif;
    font-size: 0.7rem;
  }
`;
