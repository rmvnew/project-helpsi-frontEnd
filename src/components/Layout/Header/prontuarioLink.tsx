import { Link } from "react-router-dom";
import FolderIcon from "@material-ui/icons/Folder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export const ProntuarioLink: React.FC<{
  isProntuarioExpanded: boolean;
  toggleProntuario: () => void;
}> = ({ isProntuarioExpanded, toggleProntuario }) => (
  <Link to="" onClick={toggleProntuario}>
    <FolderIcon /> Prontuário{" "}
    {isProntuarioExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  </Link>
);
