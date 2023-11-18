import { TextareaAutosize } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 70vw;
  margin: auto;
  margin-top: 20px;

  & > * {
    margin-bottom: 15px;
  }

  @media (max-width: 450px) {
    max-width: 90vw;
  }
`;

export const GraphicContainer = styled.div`
  height: 50vh;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  
`;

export const Title = styled.h2`
  color: var(--bg-dark);
`;


export const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 80px;
  font-size: 16px;
  font-family: sans-serif;
  color: var(--bg-dark);

  &:focus {
    outline: none;
    border-color: var(--bg-primary);
  }
`;
