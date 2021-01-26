import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter, Redirect, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    boxAdmin:{
        
    }
  }));



const Homepage = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <React.Fragment className={classes.root}>
            <Box className={classes.boxAdmin}>
                <Typography paragraph>
                    ยินดีต้อนรับ ! Admin
                </Typography>
            </Box>
        </React.Fragment>
    )
}

export default Homepage