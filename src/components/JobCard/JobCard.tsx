import { formatDate } from '../../utils/formatDate';
import { truncateHtml } from '../../utils/truncateHtml';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Chip,
} from '@mui/material';

import {
  MapPinIcon,
  CalendarDaysIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

import styles from './JobCard.module.css';

import type { Job } from '../../types/job';


const JobCard = ({ job }: { job: Job }) => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }} className={styles['job-card']}>
            <CardHeader
                title={job.title}
                classes={{ title: styles['job-title'], root: styles['job-header'] }}
                subheader={
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', color: 'text.secondary' }}>
                        {job.department && (
                            <Box className={styles['job-meta']}>
                                <Chip label={job.department} size="small" color="primary" />
                            </Box>
                        )}
                        {job.location && (
                            <Box className={styles['job-meta']}>
                                <MapPinIcon className={styles['job-meta-icon']}/>
                                <Typography variant="body2">{job.location}</Typography>
                            </Box>
                        )}
                        {job.employment_type && (
                            <Box className={styles['job-meta']}>
                                <BriefcaseIcon className={styles['job-meta-icon']}/>
                                <Typography variant="body2">{job.employment_type}</Typography>
                            </Box>
                        )}
                        {job.posted_at && (
                            <Box className={styles['job-meta']}>
                                <CalendarDaysIcon className={styles['job-meta-icon']} />
                                <Typography variant="body2">{formatDate(job.posted_at)}</Typography>
                            </Box>
                        )}
                    </Box>
                }
            />
            <CardContent sx={{textAlign: 'left'}} className={styles['job-description']}>
                {truncateHtml(job.description, 150)}
            </CardContent>
        </Card>
    );
}

export default JobCard;