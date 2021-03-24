import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { InfoCard } from '@mystiny/ui';
import DescriptionIcon from '@material-ui/icons/Description';
import PatientsForm from './Patients-form'
import { Link } from 'react-router-dom'

const PatientDetailPage = () => {
    return (
        <React.Fragment>
            <Box >
                <Grid container spacing={0} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Typography paragraph style={{ fontWeight: 'bold', fontSize: '2em' }} >
                            <DescriptionIcon color="primary" fontSize="small" /> รายละเอียดผู้ป่วย
                        </Typography>
                    </Grid>
                    <Grid item xs={6} align='right'>
                    </Grid>
                    <Grid item xs={12}>
                        <InfoCard title='ข้อมูลผู้ป่วย' actionTopRight={
                            <Link to="/patients" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary">
                                    ย้อนกลับ
                                </Button>
                            </Link>
                        }>
                            <PatientsForm />
                        </InfoCard>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default PatientDetailPage