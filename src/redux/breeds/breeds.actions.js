export const GET_BREEDS = 'GET_BREEDS'
export const GET_BREEDS_SUCCESS = 'GET_BREEDS_SUCCESS'
export const GET_BREEDS_FAIL = 'GET_BREEDS_FAIL'

export const ADD_BREED = 'ADD_BREED'

export const getBreeds = () => async dispatch => {
  try {
    dispatch({ type: GET_BREEDS })
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    dispatch({ type: GET_BREEDS_SUCCESS, payload: { breeds: data.message } })

  } catch (err) {
    dispatch({ type: GET_BREEDS_FAIL, payload: { error: err.message } })
    throw new Error(err)
  }
}

export const addBreedNameToFaves = name => ({
  type: 'ADD_BREED',
  payload: {
    breed: {
      name,
      favoritePics: [],
    }
  }
})