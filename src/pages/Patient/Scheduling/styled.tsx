import styled from "styled-components";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const SchedulingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 2rem;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.md}) {
    height: 50vh;
    width: 40vw;
  }
`;

export const PsychologistInfo = styled.div`
  padding: 1rem;
  height: 100%;
  background-color: var(--bg-secundary);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  color: var(--bg-dark);

  h3 {
    margin-top: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #333;
  }

  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-family: sans-serif;
    font-size: 1rem;
    color: var(--bg-dark);
    margin: 0.5rem 0;
  }
`;

export const SchedulingForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem;
  gap: 1rem;
  height: 100%;
  width: 80%;
  background-color: white;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--bg-dark);
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 4px;
  font-size: 16px;
  transition: border 0.2s;
  color: var(--bg-dark);

  &:hover,
  &:focus {
    border-color: var(--bg-primary);
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border 0.2s;
  color: var(--bg-dark);

  &:hover,
  &:focus {
    border-color: var(--bg-primary);
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--bg-primary);
  color: var(--bg-dark);
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: var(--bg-hover-primary);
    transform: scale(1.02);
  }
`;
