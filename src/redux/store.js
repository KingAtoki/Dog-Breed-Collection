import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from './breeds/breeds.reducer'

export default configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});
