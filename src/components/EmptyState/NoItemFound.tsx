import React from "react";
import { Box, Typography, Button } from "@mui/material";

type NoItemFoundProps = {
  handleResetFilters: () => void;
};

const NoItemFound: React.FC<NoItemFoundProps> = ({ handleResetFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h5">No matching jobs found</Typography>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Try changing your search or filter criteria.
        </Typography>

        <Button
          sx={{ mt: 3 }}
          variant="contained"
          onClick={handleResetFilters}
        >
          Clear Filters
        </Button>
      </Box>
    </div>
  );
}

export default NoItemFound;