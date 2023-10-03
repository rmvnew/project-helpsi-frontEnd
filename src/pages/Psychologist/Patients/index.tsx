import { useState, useEffect } from "react";
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/patient";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";

import {
  FilterContainer,
  SearchContainer,
  SortingSelect,
  PatientContainer,
  Item,
  TitleContainer,
  ActionLinks,
  Button,
} from "./styled";
import { Link } from "react-router-dom";

interface Patient {
  name: string;
  city: string;
  registrationDate: Date;
}

export const Patients = () => {
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("a-z");
  const [sortedPatients, setSortedPatients] = useState<Patient[]>([]);

  const patients: Patient[] = [
    {
      name: "João Silva",
      city: "São Paulo",
      registrationDate: new Date(2023, 8, 1),
    },
    {
      name: "Maria Fernandes",
      city: "Rio de Janeiro",
      registrationDate: new Date(2023, 7, 21),
    },
  ];

  useEffect(() => {
    let ordered = [...patients];

    if (sorting === "a-z") {
      ordered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sorting === "registrationDate") {
      ordered.sort(
        (a, b) => a.registrationDate.getTime() - b.registrationDate.getTime()
      );
    }

    setSortedPatients(ordered);
  }, [sorting, patients]);

  return (
    <Body>
      <Header />

      <PatientContainer>
        <h2>Meus pacientes</h2>

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
            <ActionLinks>
              <Link to="/trash">
                <DeleteIcon />
                Lixeira
              </Link>
              <Link to="/archived">
                <ArchiveIcon />
                Arquivados
              </Link>
            </ActionLinks>
            <SortingSelect>
              <select
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
              >
                <option value="a-z">A-Z</option>
                <option value="registrationDate">Data de registro</option>
              </select>
            </SortingSelect>
          </Button>
        </FilterContainer>

        <div>
          <TitleContainer>
            <div className="profile">
              <PersonIcon className="icon" style={{ visibility: "hidden" }} />{" "}
              <p>Nome</p>
            </div>
            <p>Cidade</p>
            <p>Data de registro</p>
            <ListIcon className="icon" style={{ visibility: "hidden" }} />
          </TitleContainer>

          {sortedPatients
            .filter((patient) => patient.name.includes(search))
            .map((patient, index) => (
              <Item key={index}>
                <div className="profile">
                  <PersonIcon className="icon" />
                  <p>{patient.name}</p>
                </div>
                <p>{patient.city}</p>
                <p>{patient.registrationDate.toLocaleDateString()}</p>
                <ListIcon />
              </Item>
            ))}
        </div>
      </PatientContainer>
    </Body>
  );
};
