import styled from "styled-components";

export const WelcomeText = styled.div`
  width: 90%;
  font-size: 1.1rem;
  line-height: 2.4rem;
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

export const PasswordReset = styled.div`
  text-align: right;
  font-size: 12px;
  margin-top: 5px;
  width: 100%;

  a {
    color: var(--bg-dark);
  }

  @media (max-width: 768px) {
    text-align: right;
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

export const GoogleButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-top: 10px;
  width: 100%;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const LoginOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    font-family: sans-serif;
    font-size: .8rem;
  }

  @media (max-width: 500px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
