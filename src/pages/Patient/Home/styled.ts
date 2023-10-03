import styled from "styled-components";

export const HomePatient = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 30px 0;

  @media (min-width: 450px) {
    gap: 40px;
    padding: 35px 0;
  }

  @media (min-width: 768px) {
    gap: 50px;
    padding: 40px 0;
  }

  @media (min-width: 998px) {
    gap: 60px;
    padding: 60px 0;
  }

  @media (min-width: 1200px) {
    gap: 70px;
    grid-template-columns: repeat(2, 1fr);
    padding: 70px 0;
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
  padding: 30px 15px;
  min-width: 350px;
  min-height: 300px;
  border-radius: 8px;

  @media (min-width: 450px) {
    padding: 40px 20px;
  }
  @media (min-width: 768px) {
    padding: 50px 25px;
    min-width: 500px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  border-radius: 8px;
  background-color: white;
  color: var(--bg-dark);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    padding: 0.5rem;
    font-size: 1.2rem;
    margin-bottom: 14px;
    color: var(--text-primary);
  }

  @media (min-width: 450px) {
    min-height: 450px;
    gap: 15px;
    h2 {
      font-size: 1.3rem;
      margin-bottom: 16px;
    }
  }

  @media (min-width: 768px) {
    min-height: 300px;
    gap: 18px;
    h2 {
      font-size: 1.4rem;
      margin-bottom: 18px;
    }
  }

  @media (min-width: 998px) {
    min-height: 500px;
    gap: 20px;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1200px) {
    min-height: 540px;
    gap: 25px;
  }
`;
