import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h2`
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  font-family: sans-serif;

  &:focus {
    outline: none;
  }
`;
