import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 5%;

  @media (max-width: 615px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: var(--bg-dark);

  @media (max-width: 600px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  padding: 7px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 600px) {
    padding: 5px;
    font-size: 12px;
  }
`;

export const AddButton = styled(Button)`
  background-color: var(--bg-dark);
  color: #fff;

  &:hover {
    background-color: var(--bg-hover-button);
  }
`;

export const EditButton = styled(Button)`
  background-color: var(--bg-primary);
  color: #fff;
  margin-right: 10px;

  &:hover {
    background-color: var(--bg-hover-primary);
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #f44336;
  color: #fff;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  color: var(--bg-dark);
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;

  input {
    flex: 1;
    border: none;
    padding: 8px;
    border-radius: 4px;
    margin-left: 10px;
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: #555;
`;
