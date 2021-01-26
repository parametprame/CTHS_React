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



const Treatmentpage = () => {
    const classes = useStyles();
    return (
        <React.Fragment className={classes.root}>
            <Box className={classes.boxAdmin}>
                <Typography paragraph>
                    Treatment Page
                </Typography>
            </Box>
        </React.Fragment>
    )
}

export default Treatmentpage