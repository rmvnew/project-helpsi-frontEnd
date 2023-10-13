import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;

  input {
    font-family: sans-serif;
    font-size: 16px;
    width: 80%;
    padding: 13px;
    border: none;
    border-radius: 5px;
  }

  select {
    font-family: sans-serif;
    color: var(--bg-dark);
    font-size: 16px;
    width: 80%;
    padding: 13px;
    border: none;
    border-radius: 5px;
    background-color: #f8f8f8;
    appearance: none;
    position: relative;
    transition: background-color 0.3s;

    &::after {
      font-size: 10px;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  option {
    padding: 10px;
    background-color: white;
    font-family: sans-serif;
    font-size: 16px;
  }

  button {
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: var(--bg-dark);
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  p {
    margin-top: 10px;
    font-size: 0.8rem;
    font-family: sans-serif;
    width: 80%;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  gap: 10px;
`;

export const PsychologistContainer = styled.div`
  background-color: #f9f9f9;
  width: 80%;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e9e9e9;
  }

  .MuiFormControlLabel-label {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  .MuiCheckbox-root {
    color: var(--bg-dark);
  }

  .Mui-checked {
    color: var(--bg-dark);
  }
`;

export const StepTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  width: 90%;
  font-family: sans-serif;
`;
