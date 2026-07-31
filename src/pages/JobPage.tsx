import React, {useState, useMemo} from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import JobFilter from '../components/JobFilter/JobFilter';
import { useJob } from '../hooks/useJobs';
import { Container, Alert } from '@mui/material';
import NoItemFound from '../components/EmptyState/NoItemFound';
import JobSkeleton from '../components/Loading/JobSkeleton';
import JobList from '../components/JobList/JobList';
import type { Job } from '../types/job';
import type { JobFilters } from '../types/jobFilter';


const filtersInitialState: JobFilters = {
  department: 'All departments',
  location: 'All locations',
  employment_type: "",
};

const JobPage: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error } = useJob();
  const { items:jobs, total} = data || {};
  const [filters, setFilters] = useState(filtersInitialState);

  const updateFilters = (key: keyof JobFilters, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

    const isAnyFilterApplied = useMemo(() => {
    return Boolean(searchTerm) || filters.department !== 'All departments' || filters.location !== 'All locations' || filters.employment_type !== '';
  }, [searchTerm, filters]);

  const filteredJobs = useMemo(() => {
    if (!jobs) return [];

    return jobs.filter((job: Job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.department === 'All departments' || job.department === filters.department) &&
      (filters.location === 'All locations' || job.location === filters.location) &&
      (filters.employment_type === '' || job.employment_type === filters.employment_type)
    );
  }, [jobs, searchTerm, filters]);

  const handleResetFilters = () => {
    setFilters(filtersInitialState);
    setSearchTerm('');
  };

  const summary = isAnyFilterApplied
  ? `Showing ${filteredJobs.length} of ${total} open roles`
  : `${total} open roles`;

  const renderContent = () => {
    if (isLoading) {
      return Array.from({ length: 5 }).map((_, index) => (
        <JobSkeleton key={index} />
      ));
    }

    if (error) {
      return (
        <Alert severity="error">
          Failed to load jobs. Please try again later.
        </Alert>
      );
    }

    if (filteredJobs.length === 0) {
      return <NoItemFound handleResetFilters={handleResetFilters} />;
    }

    return <JobList jobs={filteredJobs} summary={summary} />;
  };

  

  return (
    <Container sx={{ mt: 4 }}>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <JobFilter filters={filters} onFilterChange={updateFilters} isAnyFilterApplied={isAnyFilterApplied} handleResetFilters={handleResetFilters} />
      <main>
        {renderContent()}</main>
    </Container>
  );
};

export default JobPage;
