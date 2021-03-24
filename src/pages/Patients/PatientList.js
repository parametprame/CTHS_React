import React from 'react'
// import DataGrid, {Row} from 'react-data-grid';
import {
    Box,
    Grid,
    Typography,
    Button,
    makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory, Link } from "react-router-dom";
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
    root: {
        boxAdmin: {
        },
        display: 'flex',
        "& div.MuiDataGrid-cell": {
            color: 'white'
        },
        "& div.MuiDataGrid-colCellTitle": {
            color: 'black'
        },
        "& div.MuiToolbar-root": {
            color: 'white'
        },
        "& div.MuiTablePagination-actions": {
            color: 'white'
        },
        "& div.MuiIconButton-label": {
            color: 'white'
        },
        "& div.MuiDataGrid-colCellWrapper": {
            backgroundColor: 'white'
        }
    }
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 200, flex: 1, resizable: true },
    { field: 'firstname', headerName: 'First Name', width: 200, flex: 1, resizable: true },
    { field: 'lastname', headerName: 'Last Lastname', width: 200, flex: 1, resizable: true },
    { field: 'idcard', headerName: 'ID Card', width: 200, flex: 1, resizable: true }
];

const rows = [
    { id: 0, firstname: 'Test1', lastname: 'Test1', idcard: '123456' },
    { id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456' },
    { id: 2, firstname: 'Test3', lastname: 'Test3', idcard: '123456' },
    { id: 3, firstname: 'Test2', lastname: 'Test2', idcard: '123456' },
    { id: 4, firstname: 'Test2', lastname: 'Test2', idcard: '123456' },
    { id: 5, firstname: 'Test2', lastname: 'Test2', idcard: '123456' },
    { id: 6, firstname: 'Test2', lastname: 'Test2', idcard: '123456' },
    { id: 7, firstname: 'Test2', lastname: 'Test2', idcard: '123456' },
    { id: 8, firstname: 'Test2', lastname: 'Test2', idcard: '123456' },
    { id: 1, firstname: 'Test2', lastname: 'Test2', idcard: '123456' },
];

const Patientpage = () => {
    const classes = useStyles();
    let history = useHistory();
    return (
        <React.Fragment className={classes.root}>
            <Box className={classes.boxAdmin}>
                <Grid container spacing={0} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Typography paragraph style={{ fontWeight: 'bold', fontSize: '2em' }} >
                            รายชื่อผู้ป่วย
                        </Typography>
                    </Grid>
                    <Grid item xs={6} align='right'>
                        <Box style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Link to='/patients/create' style={{ textDecoration: 'none' }}>
                                <Button startIcon={<AddIcon />} variant="contained" color="primary">
                                    สร้างผู้ป่วยใหม่
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pagination
                                pageSize={10}
                                onRowDoubleClick={(row) => history.push(`/patients/detail/${row.row.id}`)}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Patientpage