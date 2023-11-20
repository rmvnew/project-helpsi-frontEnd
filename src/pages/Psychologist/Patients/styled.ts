import styled from "styled-components";
import ListIcon from "@mui/icons-material/List";

export const PatientContainer = styled.div`
  padding: 10px;
  max-width: 95%;
  min-height: 70vh;
  margin: 30px auto;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  h2 {
    padding: 20px 0;
    margin-bottom: 20px;
    color: var(--bg-dark);
  }

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  color: var(--bg-dark);
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }

  input {
    border: 1px solid #ccc;
    padding: 15px 8px 15px 45px;
    border-radius: 8px;
    width: 100%;
    font-size: 16px;
    font-family: sans-serif;

    &:focus {
      outline: none;
      border-color: var(--bg-secundary);
      box-shadow: 0 0 0 0.1rem rgba(0, 255, 128, 0.245);
    }
  }

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.div`
  display: flex;
  gap: 20px;
`;

export const SortingSelect = styled.div`
  margin-bottom: 10px;

  select {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--bg-secundary);
    color: var(--bg-dark);
    border: 1px solid #ccc;
    cursor: pointer;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 768px) {
    width: auto;
    margin-bottom: 0;
  }
`;

export const ActionLinks = styled.div`
  display: flex;
  gap: 10px;
  height: 40px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 9px;
    border-radius: 5px;
    background-color: var(--bg-secundary);
    text-decoration: none;
    color: var(--bg-dark);
    font-size: 0.9rem;
  }

  svg {
    height: 20px;
  }

  @media (min-width: 769px) {
    gap: 20px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  color: var(--bg-dark);

  @media (max-width: 450px) {
  }
`;

export const TitleContainer = styled(ItemContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: var(--bg-dark);
  margin-bottom: 10px;
  font-weight: bold;

  .profile,
  p {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 450px) {
    .none {
      display: none;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-secundary);
  color: var(--bg-dark);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

  .profile,
  > p {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-family: sans-serif;
  }

  @media (max-width: 450px) {
    .none {
      display: none;
    }

    .p {
      font-size: 0.8rem;
    }
  }
`;

export const StyledListIcon = styled(ListIcon)`
  cursor: pointer;
`;

export const NoDataContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #f5f5f5;
  border-radius: 8px;
  font-size: 1.2rem;
  color: #757575;

  p {
    text-align: center;
  }
`;

export const ModalContainer = styled.div`
  height: 762px;

  > h2 {
    padding-bottom: 10px;
    border-bottom: 2px solid black;
    width: 300px;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    display: flex;
    gap: 5px;
    align-items: center;
    font-family: sans-serif;
    font-size: 0.9rem;
    margin-bottom: 10px;

    > svg {
      width: 25px;
    }
  }
`;

export const Diagnosis = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;

  > h3,
  p {
    font-family: sans-serif;
    text-align: center;
  }
`;
