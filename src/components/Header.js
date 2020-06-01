import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import PetsIcon from '@material-ui/icons/Pets';
import { Link } from '@reach/router'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dog Breed Collection
          </Typography>
          <Link to='/' className={classes.homeButton}> 
            <IconButton edge="end" color="inherit" aria-label="home">
              <PetsIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
