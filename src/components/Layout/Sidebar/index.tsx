import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo.svg"

import HomeIcon from "@material-ui/icons/Home";
import ReportIcon from "@material-ui/icons/Report";

import { Sidebar, SidebarLink, SubItems } from "./styled";
import { ProntuarioLink } from "../Header/prontuarioLink";
import { SidebarProps } from "../../../interface/sidebar.interface";

const SidebarComponent: React.FC<SidebarProps> = ({
  isSidebarOpen,
  isProntuarioExpanded,
  toggleProntuario,
}) => (
  <Sidebar isOpen={isSidebarOpen}>
    <img src={logo} alt="logo da empresa" style={{width: "150px"}}  />
    <SidebarLink>
      <Link to="/">
        <HomeIcon />
        Home
      </Link>
    </SidebarLink>

    <SidebarLink>
      <ProntuarioLink
        isProntuarioExpanded={isProntuarioExpanded}
        toggleProntuario={toggleProntuario}
      />
    </SidebarLink>

    <SubItems isVisible={isProntuarioExpanded}>
      <Link to="/relatorio">Relatório</Link>
      <Link to="/laudo">Laudo</Link>
      <Link to="/declaracao">Declaração</Link>
      <Link to="/recibos">Recibos</Link>
      <Link to="/encaminhamentos">Encaminhamentos</Link>
    </SubItems>

    <SidebarLink>
      <Link to="/link">
        <ReportIcon />
        Relatório
      </Link>
    </SidebarLink>
  </Sidebar>
);

export default SidebarComponent;
