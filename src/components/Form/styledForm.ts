import { styled } from "@mui/system";
import { TextField, Select, IconButton } from "@mui/material";

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const StyledInput = styled(TextField)`
  width: 80%;
`;

export const StyledSelect = styled(Select)`
  && {
    font-family: sans-serif;
    width: 80%;
    border-radius: 5px;
    transition: background-color 0.3s;

    .MuiSelect-icon {
      font-size: 10px;
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const StyledButton = styled("button")`
  width: 80%;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: var(--bg-dark);
  color: white;

  &:hover {
    background-color: var(--bg-hover-button);
  }
`;

export const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  gap: 10px;
`;

export const PsychologistContainer = styled("div")`
  background-color: #f9f9f9;
  width: 80%;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e9e9e9;
  }

  & .psychologist-label .MuiTypography-root {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  & .psychologist-checkbox.Mui-checked {
    color: var(--bg-dark);
  }

  & .psychologist-checkbox {
    color: var(--bg-dark);
  }
`;

export const StepTitle = styled("h2")`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  width: 90%;
  font-family: sans-serif;
`;

export const StyledIconButton = styled(IconButton)`
  background-color: transparent !important;
  color: var(--bg-dark) !important;
`;
