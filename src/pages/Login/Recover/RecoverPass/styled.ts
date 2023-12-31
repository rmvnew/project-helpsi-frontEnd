import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  input {
    font-family: sans-serif;
    font-size: 16px;
    width: 80%;
    border: none;
    border-radius: 5px;
    padding: 13px;
  }

  button {
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    border: none;
    width: 80%;
    background-color: var(--bg-dark);
    color: white;
    cursor: pointer;
  }
`;
