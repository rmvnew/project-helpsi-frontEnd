import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { Menu, MenuItem, Pagination } from "@mui/material";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@material-ui/icons/Search";
import ArchiveIcon from "@mui/icons-material/Archive";

import { Body } from "../../../components/Layout/Container/style";
import Header from "../../../components/Layout/Header/psy";

import { formatPhoneNumber, getFormattedName, truncateString } from "../../../common/functions/formatString";
import { FilterContainer, SearchContainer, PatientContainer, Item, TitleContainer, ActionLinks, Button, StyledListIcon } from "./styled";

import { User } from "../../../interface/user.interface";
import { api } from "../../../hooks/useApi";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

export const Patients: React.FC = () => {

  const currentUser = useCurrentUser();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [patients, setPatients] = useState<User[]>([]);

  const [paginationMeta, setPaginationMeta] = useState({ currentPage: 1, totalPages: 1, itemCount: 0 });
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


  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleChangeLimit = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLimit(event.target.value as number);
    setPage(1);
  };

  const handleMenuClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget as unknown as HTMLElement);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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

      </PatientContainer>
    </Body>
  );
};
