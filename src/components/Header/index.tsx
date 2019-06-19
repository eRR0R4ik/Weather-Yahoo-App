import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing(2),
    marginLeft: 'auto'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
            <Typography variant="h6" color="inherit" noWrap>
              The best Weather App we ever made
            </Typography>
          </NavLink>
          <NavLink to="/settings" className={classes.icon}>
            <CameraIcon />
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
