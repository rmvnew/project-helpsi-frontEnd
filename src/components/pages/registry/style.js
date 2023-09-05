import styled from "styled-components";

export const WelcomeText = styled.div`
  width: 90%;
  font-size: 1.1rem;
  line-height: 2.4rem;
  color: var(--bg-dark);

  h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    h2 {
      font-size: 1%.5;
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

    &::placeholder {
      color: #88888a;
    }
  }

  select {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    color: #88888a;
  }

  p {
    margin-top: 20px;
    margin-bottom: 50px;
    font-family: sans-serif;
    color: var(--bg-dark);
  }
  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 500px) {
    width: 100%;
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

export const GoogleButton = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: .9rem;
  align-items: center;
  gap: 10px;
  padding: 10px 30px;
  background-color: #fff;
  color: var(--bg-dark);
  border: 1px solid #ddd;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  width: 100%;

  img {
    width: 20px;
  }
`;
