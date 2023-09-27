import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
