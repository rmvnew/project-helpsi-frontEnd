import styled from "styled-components";

export const HomePatient = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding: 40px 0;

  @media (max-width: 998px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }

  @media (max-width: 450px) {
    gap: 20px;
  }
`;

export const Column = styled.div`
  background: linear-gradient(
    145deg,
    var(--bg-secundary-lighter),
    var(--bg-secundary-darker)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  width: 45vw;
  height: auto;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 998px) {
    width: 85vw;
    padding: 30px 20px;
  }

  @media (max-width: 450px) {
    padding: 15px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  background-color: white;
  color: var(--bg-dark);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`;
