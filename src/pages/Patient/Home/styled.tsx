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
  width: 45vw;
  height: 70vh;
  border-radius: 10px;

  @media (max-width: 998px) {
    width: 85vw;
    height: 400px;
  }

`;
