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
    width: 100%;
    h2 {
      font-size: 1rem;
      margin-top: 10px;
    }
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

  p {
    margin-top: 70px;
    color: #666;
  }

  a {
    color: var(--bg-dark);
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const LoginButton = styled.button`
  background-color: var(--bg-dark);
  color: var(--bg-primary);
  border: none;
  padding: 10px 43px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

  a {
    color: var(--bg-primary);
  }

  &:hover {
    background-color: #45ada8;
  }
`;