export const GET_BREEDS = 'GET_BREEDS'
export const GET_BREEDS_SUCCESS = 'GET_BREEDS_SUCCESS'
export const GET_BREEDS_FAIL = 'GET_BREEDS_FAIL'

export const ADD_BREED = 'ADD_BREED'
export const REMOVE_BREED = 'REMOVE_BREED'

export const GET_BREED_PIC = 'GET_BREED_PIC'
export const GET_BREED_PIC_SUCCESS = 'GET_BREED_PIC_SUCCESS'
export const GET_BREED_PIC_FAIL = 'GET_BREED_PIC_FAIL'

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

export const removeBreedNameToFaves = name => ({
  type: 'REMOVE_BREED',
  payload: {
    name,
  }
})

export const addRandomBreedPic = breed => async dispatch => {
  try {
    dispatch({ type: GET_BREED_PIC })
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    const data = await response.json()
    dispatch({ type: GET_BREED_PIC_SUCCESS, payload: { breed, pic: data.message } })

  } catch (err) {
    dispatch({ type: GET_BREED_PIC_FAIL, payload: { error: err.message } })
    throw new Error(err)
  }
}