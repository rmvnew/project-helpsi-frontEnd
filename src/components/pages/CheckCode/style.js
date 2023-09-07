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
    width: 50%;
    h2 {
      font-size: 1.8rem;
      margin-top: 10px;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const LoginForm = styled.div`
  margin-top: 40px;
  gap: 15px;
  display: flex;
  justify-content: center;
  width: 90%;

  input {
    height: 42.05px;
    width: 49.06px;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: sans-serif;
  }

  @media (max-width: 768px) {
    width: 50%;
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
  margin-top: 40px;
  margin-bottom: 10px;
  width: 90%;

  &:hover {
    background-color: var(--bg-hover-button);
  }

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const Resend = styled.span`
  color: var(--bg-dark);
  font-family: sans-serif;
  margin-top: 10%;
`;
