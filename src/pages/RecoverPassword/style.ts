import styled from "styled-components";

export const WelcomeText = styled.div`
  width: 90%;
  font-size: 1.1rem;
  color: var(--bg-dark);

  p {
    margin-top: 20px;
    font-family: sans-serif;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: 70%;
    h2 {
      font-size: 1.5rem;
      margin-top: 10px;
    }
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const LoginForm = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;

  input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: sans-serif;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const LoginButton = styled.button`
  background-color: var(--bg-dark);
  color: white;
  border: none;
  padding: 10px 43px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

  &:hover {
    background-color: var(--bg-hover-button);
  }
`;