import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// Icons
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import ArchiveIcon from "@mui/icons-material/Archive";

// Project components and hooks
import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { formatPhoneNumber, getFormattedName } from "../../../common/functions/formatString";

// Styled components
import {
  FilterContainer,
  SearchContainer,
  PatientContainer,
  Item,
  TitleContainer,
  ActionLinks,
  Button,
  StyledListIcon,
} from "./styled";
import { PatientListSkeleton } from "../../../components/Layout/Loader/Skeleton/PatientListSkeleton";
import usePsychologistById from "../../../hooks/usePsychologistData";
import { Menu, MenuItem } from "@mui/material";

type PatientDisplayData = {
  id: string;
  name: string;
  city: string;
  phone: string;
};

export const Patients = () => {
  const currentUser = useCurrentUser();
  const { psychologistData, isLoading, error } = usePsychologistById(
    currentUser?.user_id || ""
  );

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget as unknown as HTMLElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [patients, setPatients] = useState<PatientDisplayData[]>([]);

  const patientsList = useMemo(() => {
    return psychologistData?.patients || [];
  }, [psychologistData]);

  useEffect(() => {
    if (patientsList.length) {
      patientsList.forEach((patient) => {
        console.log("Individual patient data:", patient);
      });

      const convertedPatients: PatientDisplayData[] = patientsList.map(
        (patient) => ({
          id: patient.user_id,
          name: patient.user_name,
          city: patient.address?.address_city || "Manaus",
          phone: patient.user_phone,
        })
      );

      setPatients(convertedPatients);
    }
  }, [patientsList]);

  if (isLoading) {
    return <PatientListSkeleton />;
  }

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
            <input type="text" placeholder="Pesquisar paciente..." />
          </SearchContainer>

          <Button>
            <ActionLinks>
              <Link to="/psy/arquived">
                <ArchiveIcon />
                Arquivados
              </Link>
            </ActionLinks>
          </Button>
        </FilterContainer>

        <div>
          <TitleContainer>
            <div className="profile">
              <PersonIcon style={{ visibility: "hidden" }} />
              <p>Nome</p>
            </div>
            <p className="none">Cidade</p>
            <p>Contato</p>
            <ListIcon style={{ visibility: "hidden" }} />
          </TitleContainer>

          {patients.map((patient) => (
            <Item key={patient.id}>
              <div className="profile">
                <PersonIcon />
                <p>{getFormattedName(patient.name)}</p>
              </div>
              <p className="none">{patient.city}</p>
              <p>{formatPhoneNumber(patient.phone )}</p>
              <StyledListIcon onClick={handleMenuClick} />
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Arquivar paciente</MenuItem>
                <MenuItem onClick={handleMenuClose}>Dados do paciente</MenuItem>
                <MenuItem onClick={handleMenuClose}>Visualizar detalhes</MenuItem>
                <MenuItem onClick={handleMenuClose}>Encaminhar paciente</MenuItem>
              </Menu>
            </Item>
          ))}
        </div>
      </PatientContainer>
    </Body>
  );
};
