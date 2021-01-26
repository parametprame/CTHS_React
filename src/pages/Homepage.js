import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
    },
    boxAdmin:{
        
    }
  }));

const Homepage = () => {
    const classes = useStyles();
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