import { Link } from "react-router-dom";
import SnippetFolderOutlinedIcon from '@mui/icons-material/SnippetFolderOutlined';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export const DocumentsLink: React.FC<{
  isDocumentsExpanded: boolean;
  toggleDocuments: () => void;
}> = ({ isDocumentsExpanded, toggleDocuments }) => (
  <Link to="" onClick={toggleDocuments}>
    <SnippetFolderOutlinedIcon/> Documentos{" "}
    {isDocumentsExpanded ? <ExpandMoreIcon /> :  <ExpandLessIcon />}
  </Link>
);
