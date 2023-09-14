import styled from "styled-components";

export const TextContainer = styled.div`
  text-align: center;

  p {
    margin-top: 20px;
    font-family: sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;

  input {
    font-family: sans-serif;
    width: 80%;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  a {
    width: 80%;
    margin-top: 5px;
    display: flex;
    justify-content: end;
    text-decoration: none;
    color: var(--bg-dark);
  }

  button {
    width: 80%;
    margin-top: 10px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    background-color: var(--bg-dark);
    color: white;
    cursor: pointer;
    text-decoration: none;

    a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
`;

export const IconeGoogle = styled.button`
  width: 80%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  border: none;
  border-radius: 5px;
  color: var(--bg-dark);
  img {
    width: 15px;
  }
`;

export const Span = styled.span`
  font-family: sans-serif;

  a {
    color: var(--bg-dark);
    text-decoration: none;
  }
`;