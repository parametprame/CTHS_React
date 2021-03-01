import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { InfoCard } from '@mystiny/ui';
import DescriptionIcon from '@material-ui/icons/Description';
import PatientsForm from './Patients-form'

const CreatePatientsPage = () => {

    return(
        <React.Fragment>
            <Box >
                <Grid container spacing={0}  alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Typography paragraph style={{fontWeight: 'bold', fontSize: '2em'}} >
                            <DescriptionIcon color="primary" fontSize="small" /> สร้างรายชื่อผู้ป่วย
                        </Typography>
                    </Grid>
                    <Grid item xs={6}  align='right'>
                        <Box style={{alignItems:'center', justifyContent:'flex-end'}}>
                            {/* <Button startIcon={<AddIcon />} variant="contained" color="primary">
                                สร้างผู้ป่วยใหม่
                            </Button> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <InfoCard title='ข้อมูลผู้ป่วย'>
                            <PatientsForm />
                        </InfoCard>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default CreatePatientsPage