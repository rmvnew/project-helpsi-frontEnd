import styled from "styled-components";

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: auto;
  padding: 40px 10px;
`;

export const StyledSubmitButton = styled("button")`
  background-color: #89d097;
  font-size: 16px;
  color: white;
  font-weight: bold;
  padding: 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #78ba8b;
  }
`;

export const StyledTitle = styled("h2")`
  text-align: center;
  color: var(--bg-dark);
`;
