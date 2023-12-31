import { useState, useEffect} from "react";


import {Dialog, DialogContent, Menu, MenuItem, Pagination } from "@mui/material";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@material-ui/icons/Search";


import { PhoneOutlined, EmailOutlined, HomeOutlined, PersonOutlineOutlined} from '@mui/icons-material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';

import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";

import { formatPhoneNumber, getFormattedName, truncateString } from "../../../common/functions/formatString";
import { FilterContainer, SearchContainer, PatientContainer, Item, TitleContainer, StyledListIcon, ModalContainer, Info, Data, Diagnosis, Text } from "./styled";

import { User } from "../../../interface/user.interface";
import { api } from "../../../hooks/useApi";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { StyledSubmitButton } from "../../Patient/DiaryList/styled";
import { EditModal } from "./editModal";
import { Loader } from "../../../components/Layout/Loader";


export const Patients: React.FC = () => {

  const currentUser = useCurrentUser();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedPatient, setSelectedPatient] = useState<User | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [patients, setPatients] = useState<User[]>([]);

  const [paginationMeta, setPaginationMeta] = useState({currentPage: 1,totalPages: 1,itemCount: 0});
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const getPatients = async () => {

      try {

        setLoading(true);

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

          setTotalPages(Math.ceil(response.data.total / limit));
        }

        setLoading(false);

      } catch (error) {
        console.error("Error fetching patient data:", error);
        setLoading(false);
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

  const handleEditDiagnosis = () => {
    setOpenModal(false);
    setOpenEditModal(true);
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

          {loading ? (
            <Loader/>
          ) : (
            <div>
              {patients.map((patient) => (
                <Item key={patient.user_id}>
                  <div className="profile">
                    <PersonIcon />
                    <p className="p">{truncateString(getFormattedName(patient.user_name), 17)}</p>
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
                    
                    <MenuItem onClick={() => handleViewDetails(selectedPatient)}>Visualizar detalhes</MenuItem>
                  </Menu>
                </Item>
              ))}
            </div>
          )}
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
                  <span><CalendarMonthOutlinedIcon /> Nascimento: {format(new Date(selectedPatient.user_date_of_birth), " d'/'MM'/'yyyy", { locale: ptBR })}</span>
                  <span><EditCalendarOutlinedIcon  /> Registro: {format(new Date(selectedPatient.create_at), " d'/'MM'/'yyyy", { locale: ptBR })}</span>
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
                <Text>
                  <h3>Diagnóstico</h3>
                  <p>{selectedPatient.patientDetail.diagnosis}</p>
                </Text>
              </Diagnosis>

              <Diagnosis>
                <Text>
                  <h3>Motivo da consulta</h3>
                  <p>{selectedPatient.patientDetail.consultation_reason}</p>
                </Text>
              </Diagnosis>

              <Diagnosis>
                <Text>
                  <h3>Frequência de sessões</h3>
                  <p>{selectedPatient.patientDetail.session_frequency}</p>
                </Text>
              </Diagnosis>
              

              <Diagnosis>
                <Text>
                  <h3>Status Atual</h3>
                  <p>{selectedPatient.patientDetail.current_status}</p>
                </Text>
              </Diagnosis>


              <StyledSubmitButton type="submit" onClick={handleEditDiagnosis}>Editar Relatório</StyledSubmitButton>
                            
            </ModalContainer>
          )}
        </DialogContent>
      </Dialog>

      <EditModal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        patient={selectedPatient}
      />
      
      </PatientContainer>

    </Body>
  );
};
