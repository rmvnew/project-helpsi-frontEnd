import styled from "styled-components";

export const StyledSubmitButton = styled("button")`
  background-color: #89d097;
  font-size: 16px;
  color: white;
  font-weight: bold;
  padding: 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #78ba8b;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export const DeleteButton = styled.button`

  background-color: #f44336d1;
  color: #fff;
  margin-top: 10px;
  padding: 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d32f2f;
    color: #fff;
  }
`;
