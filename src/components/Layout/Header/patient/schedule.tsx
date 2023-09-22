import { Link } from "react-router-dom";
import EventIcon from '@mui/icons-material/Event';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export const ScheduleLink: React.FC<{
  isScheduleExpanded: boolean;
  toggleSchedule: () => void;
}> = ({ isScheduleExpanded, toggleSchedule }) => (
  <Link to="" onClick={toggleSchedule}>
    <EventIcon /> Agendar{" "}
    {isScheduleExpanded ? <ExpandMoreIcon /> :  <ExpandLessIcon />}
  </Link>
);
