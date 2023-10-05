import { useState } from "react";

import SearchIcon from "@material-ui/icons/Search";

// Project components
import { Body } from "../../../../components/Layout/Container/style";
import Header from "../../../../components/Layout/Header/psy";

// Styled components
import {
  FilterContainer,
  SearchContainer,
  SortingSelect,
  PatientContainer,
  Button,
  NoDataContainer,
} from "../styled";


export const ArchivedPatients = () => {
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("a-z");

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

          <Button>
            <SortingSelect>
              <select
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
              >
                <option value="a-z">A-Z</option>
                <option value="registrationDate">Última consulta</option>
              </select>
            </SortingSelect>
          </Button>
        </FilterContainer>

        <NoDataContainer><p>Nenhum paciente arquivado no momento.</p></NoDataContainer>
      </PatientContainer>
    </Body>
  );
};
