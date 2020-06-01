import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  GridList,
  GridListTile,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const Collection = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const classes = useStyles();
  const { favoriteBreeds } = useSelector(state => state.breeds)

  const renderCollection = () => (
    favoriteBreeds.map(breed => {
      return (
        <ExpansionPanel key={breed.name}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="breed-content"
            id="breed-header"
          >
            <Typography className={classes.heading}>{breed.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {breed.favoritePics.length
              ? (
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                  {breed.favoritePics.map((pic) => (
                    <GridListTile key={pic} cols={1}>
                      <img src={pic} alt={breed} />
                    </GridListTile>
                  ))}
                </GridList>
              )
              : (
                <Button variant="contained" color="primary">
                  Save a random picture of {vowels.includes(breed.name[0]) ? 'an' : 'a'} {breed.name}!
                </Button>
              )
            }

          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    })
  )

  const renderCTA = () => (
    <Typography variant="caption" gutterBottom>
      No favorites selected yet. Select one from the menu above!
    </Typography>
  )

  return (
    <div className={classes.root}>
      {favoriteBreeds.length
        ? renderCollection()
        : renderCTA()
      }
    </div>
  );
}

export default Collection
