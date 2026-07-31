import {TextField,InputAdornment, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <TextField
            fullWidth
            label="Search jobs"
            variant="outlined"
            placeholder="Search..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }
            }}
        />
    );
}

export default SearchBar;