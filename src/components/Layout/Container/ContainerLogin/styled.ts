import styled from "styled-components";

export const LoginContainer = styled.div`
  background: linear-gradient(
    145deg,
    var(--bg-primary-lighter),
    var(--bg-primary-darker)
  );
  width: 95vw;
  color: var(--bg-dark);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
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
    color: var(--bg-dark-lighter);
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  min-height: 600px;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
  }

  a {
    color: var(--bg-dark);
    font-family: sans-serif;
    text-decoration: none;
    margin-top: 20px;

    &:hover {
      color: var(--bg-dark-darker);
    }
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
    color: var(--bg-body);
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background-color: var(--bg-hover-button);
    }
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
