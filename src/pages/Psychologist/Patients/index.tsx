import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

import {Dialog, DialogContent, Menu, MenuItem, Pagination } from "@mui/material";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@material-ui/icons/Search";
import ArchiveIcon from "@mui/icons-material/Archive";

import { PhoneOutlined, EmailOutlined, HomeOutlined, PersonOutlineOutlined } from '@mui/icons-material';


import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";

import { formatPhoneNumber, getFormattedName, truncateString } from "../../../common/functions/formatString";
import { FilterContainer, SearchContainer, PatientContainer, Item, TitleContainer, ActionLinks, Button, StyledListIcon, ModalContainer, Info, Data, Diagnosis } from "./styled";

import { User } from "../../../interface/user.interface";
import { api } from "../../../hooks/useApi";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

import { useTranslation } from "react-i18next";
import "../../../i18next/GenderLst";

import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";

export const Patients: React.FC = () => {

  const currentUser = useCurrentUser();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedPatient, setSelectedPatient] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [patients, setPatients] = useState<User[]>([]);

  const [paginationMeta, setPaginationMeta] = useState({currentPage: 1,totalPages: 1,itemCount: 0});
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const userId = currentUser?.user_id;
        const response = await api.get("/user/all-patients/psychologist", {
          params: {
            user_id: userId,
            page,
            limit,
          },
        });

        if (response.data) {
          setPatients(response.data.items);

          setPaginationMeta({
            currentPage: response.data.meta.currentPage,
            totalPages: response.data.meta.totalPages,
            itemCount: response.data.meta.itemCount,
          });

        }

        setTotalPages(Math.ceil(response.data.total / limit));
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    if (currentUser) {
      getPatients();
    }
  }, [currentUser, page, limit, totalPages]);

  const handleMenuClick = (
    event: React.MouseEvent<SVGSVGElement>,
    patient: User
  ) => {
    setAnchorEl(event.currentTarget as unknown as HTMLElement);
    setSelectedPatient(patient);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewDetails = (patient: User | null) => {
    setSelectedPatient(patient);
    setOpenModal(true);
    handleMenuClose();
  };

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeLimit = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLimit(event.target.value as number);
    setPage(1);
  };

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
            <Item key={patient.user_id}>
              <div className="profile">
                <PersonIcon />
                
                <p className="p">{ truncateString(getFormattedName(patient.user_name), 17) }</p>
              </div>
              <p className="none p">{patient.address?.address_city}</p>
              <p className="p">{formatPhoneNumber(patient.user_phone)}</p>
              <StyledListIcon onClick={(event) => handleMenuClick(event, patient)} />
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleMenuClose()}>Arquivar paciente</MenuItem>
                <MenuItem onClick={() => handleViewDetails(selectedPatient)}>Visualizar detalhes</MenuItem>

              </Menu>
            </Item>
          ))}

        </div>

        <div className="page">

          <Pagination
            count={paginationMeta.totalPages}
            page={paginationMeta.currentPage}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
            style={{ marginTop: "20px" }}
            
          />
          <div className="items" style={{ marginTop: "20px" }}>
            <label>Itens por página:</label>
              <select value={limit} onChange={handleChangeLimit}>
                <option value={5}>5</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
              </select>
          </div>

        </div>

        <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        
        <DialogContent>
        
          {selectedPatient && (
            <ModalContainer>
              <h2>Detalhes do Paciente</h2>

              <Info>
                <Data>
                  <span><PersonOutlineOutlined /> {getFormattedName(selectedPatient.user_name)}</span>
                  <span><PersonOutlineOutlined /> {t(getFormattedName(selectedPatient.user_genre))}</span>
                  <span><PersonOutlineOutlined /> Cadastrado no dia: {format(new Date(selectedPatient.create_at), " d'/'MM'/'yyyy", { locale: ptBR })}</span>
                </Data>
                <Data>
                  <span><PhoneOutlined /> {formatPhoneNumber(selectedPatient.user_phone)}</span>
                  <span><EmailOutlined /> {selectedPatient.user_email}</span>
                  <span> <HomeOutlined /> 

                  {selectedPatient.address.address_street}, 
                  { selectedPatient.address.address_home_number}, 
                  { selectedPatient.address.address_district}, <br />
                  { selectedPatient.address.address_city}-
                  { selectedPatient.address.address_state}</span>

                </Data>
              </Info>

              <Diagnosis>
                <h3>Diagnóstico</h3>
                <p>{selectedPatient.patientDetail.diagnosis}</p>
              </Diagnosis>

              <Diagnosis>
                <h3>Frequência de sessões</h3>
                <p>{selectedPatient.patientDetail.session_frequency}</p>
              </Diagnosis>
              <Diagnosis>
                <h3>Status Atual</h3>
                <p>{selectedPatient.patientDetail.current_status}</p>
              </Diagnosis>
                            
            </ModalContainer>
          )}
        </DialogContent>
      </Dialog>
      </PatientContainer>

    </Body>
  );
};
