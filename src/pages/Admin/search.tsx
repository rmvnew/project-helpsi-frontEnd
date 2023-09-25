import { Search } from "@material-ui/icons";
import { SearchBar, SearchIcon } from "./styled";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchComponent: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <SearchBar>
      <SearchIcon>
        <Search />
      </SearchIcon>
      <input
        type="text"
        placeholder="Pesquisar usuário..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </SearchBar>
  );
};
