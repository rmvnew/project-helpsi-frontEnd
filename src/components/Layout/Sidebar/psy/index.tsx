import { Link } from "react-router-dom";

import logo from "../../../../assets/img/logo.svg";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import { Sidebar, SidebarLink } from "../styled";
import { DocumentsLink } from "../../Header/psy/documents";
import { SidebarPsyProps } from "../../../../interface/sidebar.interface";
import { SubItemsWrapper } from "../SubItemsWrapper";

const SidebarComponent: React.FC<SidebarPsyProps> = ({
  isSidebarOpen,
  isDocumentsExpanded,
  toggleDocuments,
}) => (
  <Sidebar open={isSidebarOpen}>
    <img src={logo} alt="logo da empresa" style={{ width: "150px" }} />
    <SidebarLink>
      <Link to="/">
        <HomeOutlinedIcon />
        Home
      </Link>
    </SidebarLink>

    <SidebarLink>
      <DocumentsLink
        isDocumentsExpanded={isDocumentsExpanded}
        toggleDocuments={toggleDocuments}
      />
    </SidebarLink>

    <SubItemsWrapper visible={isDocumentsExpanded}>
      <Link to="/relatorio">Relatório</Link>
      <Link to="/laudo">Laudo</Link>
      <Link to="/declaracao">Declaração</Link>
      <Link to="/recibos">Recibos</Link>
      <Link to="/encaminhamentos">Encaminhamentos</Link>
      </SubItemsWrapper>
    <SidebarLink>
      <Link to="/psy/patients">
        <PeopleAltOutlinedIcon />
        Pacientes
      </Link>
    </SidebarLink>
  </Sidebar>
);

export default SidebarComponent;
