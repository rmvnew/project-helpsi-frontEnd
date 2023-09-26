import styled from 'styled-components';

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 20px;
  
`;

const Label = styled.label`
  margin-right: 15px;
  font-size: 16px;
  font-weight: 500;
  color: var(--bg-dark);
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  font-size: 15px;
  background-color: var(--bg-secundary);
  color: var(--bg-dark);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  appearance: none;
  cursor: pointer;
  
  &:hover {
    border-color: #a0a0a0;
  }

  &:focus {
    outline: none;
    border-color: var(--bg-secundary);
    box-shadow: 0 0 0 0.2rem rgba(0, 255, 128, 0.245);
  }
`;

export const SortSelect = () => {
  return (
    <SortContainer>
      <Label>Ordenar por:</Label>
      <Select>
        <option value="createdAt">Data de criação</option>
        <option value="lastModified">Último modificado</option>
        <option value="name">A-Z</option>
        <option value="isActive">Ativo</option>
        <option value="isInactive">Inativo</option>
      </Select>
    </SortContainer>
  );
};
