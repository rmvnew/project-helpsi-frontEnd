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
  gap: 10px;

  a {
    font-size: 0.8rem;
    width: 80%;
    margin-top: 5px;
    display: flex;
    justify-content: end;
    text-decoration: none;
    color: var(--bg-dark);
  }
`;

export const Span = styled.span`
  font-family: sans-serif;
  text-align: center;
  font-size: 0.8rem;

  a {
    color: var(--bg-dark);
    text-decoration: none;
  }
`;
