import styled from "styled-components";

export const PatientContainer = styled.div`
  padding: 20px;
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

  @media (max-width: 450px) {
  }
  input {
    border: 1px solid #ccc;
    padding: 15px 8px 15px 45px;
    border-radius: 8px;
    width: 100%;
    font-size: 16px;

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
    width: 70%;

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
