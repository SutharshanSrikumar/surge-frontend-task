import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function DashboardLayout() {
  const classes = useStyles();
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login")
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box >
            <Typography variant="h6" noWrap>
              Surge
            </Typography>
          </Box>
          <Box >
            <Button sx={{ width: 100 }} color="inherit" onClick={logOut}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={()=>navigate("/app/users")}>
              <ListItemIcon><PeopleAltIcon /></ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItem>
            <ListItem button onClick={()=>navigate("/app/notes")}>
              <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
              <ListItemText primary={"Notes"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Outlet />
      </main>
    </div>
  );
}
