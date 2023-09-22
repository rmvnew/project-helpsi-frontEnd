import { Link } from "react-router-dom";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export const DailyLink: React.FC<{
  isDailyExpanded: boolean;
  toggleDaily: () => void;
}> = ({ isDailyExpanded, toggleDaily }) => (
  <Link to="" onClick={toggleDaily}>
    <AutoStoriesOutlinedIcon/> Diário{" "}
    {isDailyExpanded ? <ExpandMoreIcon /> :  <ExpandLessIcon />}
  </Link>
);
