import styled from "styled-components";
import { AddButton, Content } from "../../pages/Admin/styled";

export const FormWrapper = styled.form`
  ${Content};
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

    button,
    input[type="submit"] {
      grid-column: 1 / -1;
    }
  }
`;
export const StyledInput = styled.input`
  padding: 10px;
  font-family: sans-serif;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--bg-primary);
  }
`;

export const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: white;
  color: var(--bg-dark);
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--bg-primary);
  }
`;

export const SubmitButton = styled(AddButton)`
  width: 20%;
  padding: 8px 5px;
  display: flex;
  justify-content: center;
`;
