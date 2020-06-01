import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../components/SearchBar'

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    width: '100%',
    maxWidth: 500,
    textAlign: 'center'
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Choose your favorite dog breed!
      </Typography>
      <SearchBar />
    </div>
  )
}

export default HomePage
