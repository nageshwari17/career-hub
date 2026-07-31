
import type { Job } from './../../types/job';
import JobCard from '../JobCard/JobCard';
import { Box, Typography } from '@mui/material';

const JobList: React.FC<{ jobs: Job[], summary: string }> = ({ jobs, summary }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="body2" sx={{ mb: 2, textAlign: 'left'}}>
        {summary}
      </Typography>
      {jobs.map((job: Job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Box>
  );
};

export default JobList;
