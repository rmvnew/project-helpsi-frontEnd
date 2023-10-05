import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 5%;

  @media (max-width: 615px) {
    width: 90%;
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
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--bg-dark);
  }
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
  background-color: var(--bg-dark);
  color: #fff;
  margin-right: 10px;

  &:hover {
    background-color: var(--bg-hover-button);
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #f44336d1;
  color: #fff;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 15px 15px;
  color: var(--bg-dark);
  border-bottom: 1px solid #e0e0e0;

  &:nth-child(even) {
    background-color: var(--bg-secundary);
    border-radius: 5px 0 5px 5px;
  }

  &:nth-child(odd) {
    background-color: white;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ToggleFormButton = styled(Button)`
  background-color: var(--bg-dark);
  color: #fff;

  &:hover {
    background-color: var(--bg-hover-button);
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  input {
    flex: 1;
    border: none;
    color: var(--bg-dark);
    padding: 8px;
    border-radius: 4px;
    margin-left: 10px;
    outline: none;

   
  }

  @media (min-width: 768px) {
      width: 50%;
    }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: #555;
`;

export const Query = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;
