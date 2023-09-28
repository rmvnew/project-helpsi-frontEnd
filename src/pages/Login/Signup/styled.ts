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
    font-size: .8rem;
    font-family: sans-serif;
    width: 80%;
    text-align: center;
  }
`;
