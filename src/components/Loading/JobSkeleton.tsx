import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Skeleton,
} from '@mui/material';

import styles from '../JobCard/JobCard.module.css';

const JobSkeleton = () => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }} className={styles['job-card']}>
            <CardHeader
                title={<Skeleton variant="text" width="60%" height={28} />}
                classes={{ title: styles['job-title'], root: styles['job-header'] }}
                subheader={
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', color: 'text.secondary' }}>
                        <Skeleton variant="rounded" width={80} height={24} />
                        <Skeleton variant="text" width={100} height={24} />
                        <Skeleton variant="text" width={120} height={24} />
                        <Skeleton variant="text" width={90} height={24} />
                    </Box>
                }
            />
            <CardContent sx={{ textAlign: 'left' }} className={styles['job-description']}>
                <Skeleton variant="text" width="100%" height={24} />
                <Skeleton variant="text" width="90%" height={24} />
                <Skeleton variant="text" width="70%" height={24} />
            </CardContent>
        </Card>
    );
};

export default JobSkeleton;
