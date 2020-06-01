import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
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
import { addRandomBreedPic } from '../redux/breeds/breeds.actions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexDirection: 'column',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  gridList: {
    width: '100%',
    height: 175,
    margin: '2px 0'
  },
}));

const Collection = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const dispatch = useDispatch()
  const classes = useStyles();
  const { favoriteBreeds } = useSelector(state => state.breeds)

  const addRandomPic = (e, breed) => {
    dispatch(addRandomBreedPic(breed))
  }

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
            <div className={classes.root}>
              {!!breed.favoritePics.length
                && (
                  <GridList cellHeight={100} className={classes.gridList} cols={4}>
                    {breed.favoritePics.map((pic) => (
                      <GridListTile key={pic} cols={1}>
                        <img src={pic} alt={breed} />
                      </GridListTile>
                    ))}
                  </GridList>
                )
              }
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={e => addRandomPic(e, breed.name)}
              >
                Save a random picture of {vowels.includes(breed.name[0]) ? 'an' : 'a'} {breed.name}!
              </Button>
            </div>
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
