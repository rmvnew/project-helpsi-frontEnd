import { Label, Select, SortContainer } from "./styled";

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
