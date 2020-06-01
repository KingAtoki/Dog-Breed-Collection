import {
  GET_BREEDS,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_FAIL,
  ADD_BREED,
  GET_BREED_PIC,
  GET_BREED_PIC_FAIL,
  GET_BREED_PIC_SUCCESS,
} from './breeds.actions';

const INITIAL_STATE = {
  breeds: [],
  favoriteBreeds: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_BREEDS:
      return {
        ...state,
        loading: true,
      };
    case GET_BREEDS_SUCCESS:
      return {
        ...state,
        breeds: action.payload.breeds,
        loading: false,
        error: '',
      };
    case GET_BREEDS_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };

    case ADD_BREED:
      const sortedFavoriteBreeds = [...state.favoriteBreeds, action.payload.breed]
        .sort((a, b) => a.name > b.name ? 1 : -1)
      return {
        ...state,
        favoriteBreeds: sortedFavoriteBreeds
      }

    case GET_BREED_PIC:
      return {
        ...state,
        loading: true,
      };
    case GET_BREED_PIC_SUCCESS:
      const breeds = [...state.favoriteBreeds]
      let indexOfBreed
      let updatedBreed = breeds.find((breed, idx) => {
        indexOfBreed = idx
        return breed.name === action.payload.breed
      })
      updatedBreed = {
        ...updatedBreed,
        favoritePics: [...updatedBreed.favoritePics, action.payload.pic]
      }
      breeds.splice(indexOfBreed, 1, updatedBreed)
      return {
        ...state,
        loading: false,
        error: '',
        favoriteBreeds: breeds
      };
    case GET_BREED_PIC_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
