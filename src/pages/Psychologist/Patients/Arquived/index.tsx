import { useState } from "react";

import SearchIcon from "@material-ui/icons/Search";

// Project components
import { Body } from "../../../../components/Layout/Container/style";
import Header from "../../../../components/Layout/Header/psy";

// Styled components
import {
  FilterContainer,
  SearchContainer,
  PatientContainer,
  NoDataContainer,
} from "../styled";

export const ArchivedPatients = () => {
  const [search, setSearch] = useState("");

  return (
    <Body>
      <Header />
      <PatientContainer>
        <h2>Pacientes Arquivados</h2>
        <FilterContainer>
          <SearchContainer>
            <SearchIcon />
            <input
              type="text"
              placeholder="Pesquisar paciente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchContainer>
        </FilterContainer>

        <NoDataContainer>
          <p>Nenhum paciente arquivado no momento.</p>
        </NoDataContainer>
      </PatientContainer>
    </Body>
  );
};
