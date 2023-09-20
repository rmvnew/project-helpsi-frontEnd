import React from "react";
import { DropdownMenu } from "./styled";
import { Link } from "react-router-dom";
import { DropdownMenuProps } from "../../../types/Boolean";

const Dropdown: React.FC<DropdownMenuProps> = ({ isVisible }) => (
  <DropdownMenu isVisible={isVisible}>
    <Link to="/link">Relatório</Link>
    <Link to="/link">Laudo</Link>
    <Link to="/link">Declaração</Link>
    <Link to="/link">Recibos</Link>
    <Link to="/link">Encaminhamentos</Link>
  </DropdownMenu>

);

export default Dropdown;