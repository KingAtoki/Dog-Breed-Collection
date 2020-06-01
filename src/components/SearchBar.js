import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const SearchBar = () => {
  const [breedField, setBreedField] = useState('')
  const { breeds } = useSelector(state => state.breeds)
  // We are going to pull out the keys because we only want
  // the main breeds and not sub - breeds
  const breedNames = Object.keys(breeds)
  console.log(breedField)
  return (
    <Autocomplete
      id="searchbox"
      options={breedNames}
      inputValue={breedField}
      onInputChange={(event, newInputValue) => {
        setBreedField(newInputValue);
      }}
      getOptionLabel={(option) => option}
      style={{ width: 300, margin: '0 auto' }}
      renderInput={(params) => <TextField {...params} label="Breed" variant="outlined" />}
    />
  );
}

export default SearchBar