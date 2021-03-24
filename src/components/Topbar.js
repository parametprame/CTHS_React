import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Homepage from '../pages/Homepage'
import Patients from '../pages/Patients/PatientList'
import PatientDetail from '../pages/Patients/Detail'
import CreatePatients from '../pages/Patients/Create'
import Administor from '../pages/Administor'
import Diagnosis from '../pages/Diagnosis'
import Medicine from '../pages/Medicine'
import Treatment from '../pages/Treatment'
import Report from '../pages/Report'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BookIcon from '@material-ui/icons/Book';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: "#bde4e2",
    color: "black",
    justifyContent: 'center',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  button:{
    height: "100%"
  },
  title: {
    flexGrow: 1,
  },
}));

const  Layout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
    <Switch>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
              >
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                  Clinic Treatment History
              </Typography>
              <Button variant="contained" color="secondary" className={classes.button}>
                  Logout
              </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={Link} to='/'>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText>
                Home
              </ListItemText>
            </ListItem>

            <ListItem  button component={Link} to='/patients'>
              <ListItemIcon>
                <SupervisorAccountIcon/>
              </ListItemIcon>
              <ListItemText>
                Patients
              </ListItemText>
            </ListItem>

            <ListItem  button component={Link} to='/treatment'>
              <ListItemIcon>
                <BookIcon/>
              </ListItemIcon>
              <ListItemText>
                Treatment
              </ListItemText>
            </ListItem>

            <ListItem button component={Link} to='/diagnosis'>
              <ListItemIcon>
                <LocalLibraryIcon/>
              </ListItemIcon>
              <ListItemText>
                Diagnosis
              </ListItemText>
            </ListItem>

            <ListItem button component={Link} to='/medicine'>
              <ListItemIcon>
                <LocalHospitalIcon/>
              </ListItemIcon>
              <ListItemText>
                Medicine
              </ListItemText>
            </ListItem>

            <ListItem button component={Link} to='/report'>
              <ListItemIcon>
                <EventNoteIcon/>
              </ListItemIcon>
              <ListItemText>
                Report
              </ListItemText>
            </ListItem>

            <ListItem button component={Link} to='/administor'>
              <ListItemIcon>
                <PermContactCalendarIcon/>
              </ListItemIcon>
              <ListItemText>
                Administor
              </ListItemText>
            </ListItem>

          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <React.Fragment>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/patients" component={Patients} />
                <Route exact path="/patients/create" component={CreatePatients}/>
                <Route exact path="/patients/detail/:id" component={PatientDetail} />
                <Route exact path="/treatment" component={Treatment} />
                <Route exact path="/diagnosis" component={Diagnosis} />
                <Route exact path="/medicine" component={Medicine} />
                <Route exact path="/report" component={Report} />
                <Route exact path="/administor" component={Administor} />
          </React.Fragment>
        </main>
      </div>
    </Switch>
    </BrowserRouter> 
  );
}
export default Layout
