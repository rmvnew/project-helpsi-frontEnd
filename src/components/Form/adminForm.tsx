import styled from "styled-components";
import { AddButton, Content } from "../../pages/Admin/styled";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

export const FormWrapper = styled.form`
  ${Content};
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SectionWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--bg-dark);
`;

export const StyledFormGroup = styled(FormGroup)`
  padding-top: 1.5rem;
  padding-left: 10px;
  gap: 10px;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled(TextField)`
  width: 100%;
`;

export const StyledSelect = styled.select`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: white;
  color: var(--bg-dark);
  border-radius: 4px;
  outline: none;
  width: 100%;
  font-family: sans-serif;
  transition: border-color 0.3s;

  > option {
    font-family: sans-serif;
  }

  &:focus {
    border-color: var(--bg-primary);
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-size: 0.8rem;
    color: var(--bg-dark);
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 450px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const SubmitButton = styled(AddButton)`
  width: 20%;
  padding: 8px 5px;
  display: flex;
  justify-content: center;
`;
