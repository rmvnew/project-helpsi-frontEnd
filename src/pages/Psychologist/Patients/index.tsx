import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// Icons
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";

// Project components and hooks
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import useListPatients from "../../../hooks/useListPatients";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { Loader } from "../../../components/Layout/Loader";
import { getFormattedName } from "../../../common/functions/formatString";

// Styled components
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

interface Patient {
  name: string;
  city: string;
  registrationDate: Date;
}

export const Patients = () => {
  const currentUser = useCurrentUser();
  const { listPatients, isLoading, error } = useListPatients(
    currentUser?.user_id || ""
  );

  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("a-z");
  const [sortedPatients, setSortedPatients] = useState<Patient[]>([]);

  useEffect(() => {
    if (listPatients.length) {
      const convertedPatients = listPatients.map((appointment) => ({
        name: appointment.currentPatient.user_name,
        city: "Manaus",
        registrationDate: new Date(appointment.update_at),
      }));

      const uniqueNames = Array.from(
        new Set(convertedPatients.map((patient) => patient.name))
      );

      const uniquePatients = uniqueNames
        .map((name) => {
          return convertedPatients.find((patient) => patient.name === name);
        })
        .filter((patient) => patient !== undefined) as Patient[];

      setSortedPatients(uniquePatients);
    }
  }, [listPatients]);

  useEffect(() => {
    let ordered = [...sortedPatients];

    if (sorting === "a-z") {
      ordered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sorting === "registrationDate") {
      ordered.sort(
        (a, b) => a.registrationDate.getTime() - b.registrationDate.getTime()
      );
    }

    setSortedPatients(ordered);
  }, [sorting, sortedPatients]);

  if (isLoading) return <Loader />;

  if (error) {
    toast.error(`Error: ${error}`);
    return null;
  }
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
                <option value="registrationDate">Última consulta</option>
              </select>
            </SortingSelect>
          </Button>
        </FilterContainer>

        <div>
          <TitleContainer>
            <div className="profile">
              <PersonIcon className="icon" style={{ visibility: "hidden" }} />
              <p>Nome</p>
            </div>
            <p className="none">Cidade</p>
            <p>Última consulta</p>
            <ListIcon className="icon" style={{ visibility: "hidden" }} />
          </TitleContainer>

          {sortedPatients
            .filter((patient) => patient.name.includes(search))
            .map((patient, index) => (
              <Item key={index}>
                <div className="profile">
                  <PersonIcon className="icon" />
                  <p>{getFormattedName(patient.name)}</p>
                </div>
                <p className="none">{patient.city}</p>
                <p>{patient.registrationDate.toLocaleDateString()}</p>
                <ListIcon />
              </Item>
            ))}
        </div>
      </PatientContainer>
    </Body>
  );
};
