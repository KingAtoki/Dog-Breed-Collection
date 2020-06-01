import {
  GET_BREEDS,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_FAIL
} from './breeds.actions';

const INITIAL_STATE = {
  breeds: [],
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
    default:
      return state;
  }
};
