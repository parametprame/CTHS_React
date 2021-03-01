import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DataGrid from 'react-data-grid';
import { Box, Grid, Typography, Button  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
    },
    boxAdmin:{
    }
  }));

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'firstname', name: 'Firstname' },
    { key: 'lastname', name: 'Lastname' },
    {key:'idcard', name: 'IDCard'}
    ];

const rows = [
    {id: 0, firstname: 'Test1', lastname: 'Test1', idcard: '123456'}, 
    {id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456'}, 
    {id: 2, firstname: 'Test3', lastname: 'Test3', idcard: '123456'},
    {id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456'}, 
    {id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456'}, 
    {id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456'}, 
    {id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456'}, 
    {id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456'}, 
    {id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456'}, 
    {id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456'}, 
];


const Patientpage = () => {
    const classes = useStyles();
    return (
        <React.Fragment className={classes.root}>
            <Box className={classes.boxAdmin}>
                <Grid container spacing={0}  alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Typography paragraph style={{fontWeight: 'bold', fontSize: '2em'}} >
                            รายชื่อผู้ป่วย
                        </Typography>
                    </Grid>
                    <Grid item xs={6}  align='right'>
                        <Box style={{alignItems:'center', justifyContent:'flex-end'}}>
                            <Link to='/patients/create' style={{ textDecoration: 'none' }}>
                                <Button startIcon={<AddIcon />} variant="contained" color="primary">
                                    สร้างผู้ป่วยใหม่
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <DataGrid
                            columns={columns}
                            rows={rows}
                            style={{height: '50vh'}}
                        />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Patientpage