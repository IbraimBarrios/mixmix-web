import { useState } from "react";
import { useNavigate } from "react-router";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchInputProps = {
  fullWidth?: boolean;
};

const SearchInput = ({ fullWidth = false }: SearchInputProps) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const encodedSearch = encodeURIComponent(search.trim());
      if (encodedSearch) {
        navigate(`/search?s=${search}`);
        setSearch("");
      }
    }
  };

  return (
    <TextField
      fullWidth={fullWidth}
      id="search"
      placeholder="Buscar..."
      variant="outlined"
      size="small"
      value={search}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchInput;
