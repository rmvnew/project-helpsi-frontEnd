import styled from "styled-components";
import backgroundImage from "../../../../assets/img/background.svg";

export const LoginBackground = styled.body`
  background-image: url(${backgroundImage});
  background-size: cover;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  background-color: var(--bg-primary);
  height: 600px;
  width: 90vw;
  color: var(--bg-dark);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 70vw;
  }
  @media (min-width: 1300px) {
    width: 50vw;
  }

`;

export const TextContainer = styled.div`
  text-align: center;
  width: 80%;

  h2 {
    margin-bottom: 10px;
  }

  p {
    font-family: sans-serif;
    color: var(--bg-dark);
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
  }

  @media (min-width: 900px) {
    width: 40%;
  }
`;

export const Btn = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  a {
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    border: none;
    width: 100%;
    background-color: var(--bg-dark);
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Image = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 400px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Span = styled.span`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 15px;
  }
`;
