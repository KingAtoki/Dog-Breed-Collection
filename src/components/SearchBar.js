import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { addBreedNameToFaves } from '../redux/breeds/breeds.actions'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [breed, setBreed] = useState('')
  const { breeds } = useSelector(state => state.breeds)
  // We are going to pull out the keys because we only want
  // the main breeds and not sub - breeds
  const breedNames = Object.keys(breeds)
  const addBreed = () => {
    dispatch(addBreedNameToFaves(breed))
    setBreed('')
  }
  return (
    <div>
      <Autocomplete
        id="searchbox"
        options={breedNames}
        inputValue={breed}
        onInputChange={(event, newInputValue) => {
          setBreed(newInputValue);
        }}
        getOptionLabel={(option) => option}
        style={{ width: 300, margin: '0 auto' }}
        renderInput={(params) => <TextField {...params} label="Breed" variant="outlined" />}
      />
      {breedNames.includes(breed) && (
        <Button
          variant="contained"
          color='primary'
          style={{ margin: '30px 0' }}
          onClick={addBreed}
        >
          Add {breed} to favorites
        </Button>
      )}

    </div>
  );
}

export default SearchBar