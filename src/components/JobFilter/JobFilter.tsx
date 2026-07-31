import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import departments from '../../mocks/departments';
import locations from '../../mocks/locations';
import employmentTypes from '../../mocks/employment_type';
import type { JobFilters } from '../../types/jobFilter';


interface JobFilterProps {
  filters: JobFilters;
  onFilterChange: (key: keyof JobFilters, value: string) => void;
  isAnyFilterApplied: boolean;
  handleResetFilters: () => void;
}

const formControlSx = {
  minWidth: 220,
  textAlign: "left",
    "& .MuiSelect-select": {
      textAlign: "left",
    },
  width: {
    xs: '100%',
    sm: 220,
  },
};

const JobFilter: React.FC<JobFilterProps> = ({ filters, onFilterChange, isAnyFilterApplied, handleResetFilters }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, py: 2, flexWrap: 'wrap' }}>
      <FormControl sx={formControlSx}>
        <InputLabel shrink>Department</InputLabel>
        <Select
          label="Department"
          value={filters.department}
          onChange={(e) => onFilterChange('department', e.target.value)}
          displayEmpty
        >
          {departments.map((dept) => (
            <MenuItem key={dept} value={dept}>
              {dept}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={formControlSx}>
        <InputLabel shrink>Locations</InputLabel>
        <Select
          value={filters.location}
          label="Locations"
          onChange={(e) => onFilterChange('location', e.target.value)}
          displayEmpty
        >
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>
              {loc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={formControlSx}>
        <InputLabel shrink>Employment Type</InputLabel>
        <Select
          value={filters.employment_type}
          label="Employment Type"
          onChange={(e) => onFilterChange('employment_type', e.target.value)}
          displayEmpty
        >
          {employmentTypes.map((type) => (
            <MenuItem key={type.label} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {isAnyFilterApplied ? (
        <Button  onClick={handleResetFilters} size="small" aria-label="Clear filters">
          Clear Filters <CloseIcon fontSize="small" />
        </Button>
      ) : null }
    </Box>
  );
};

export default JobFilter;
