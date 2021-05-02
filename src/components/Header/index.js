import React from 'react';
import useStyles from './styles';

import AppBar from '@material-ui/core/AppBar';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolBar}>
        <NewReleasesIcon className={classes.icon} />
        <Typography variant="h4" color="inherit" noWrap>
          COVID19 Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
