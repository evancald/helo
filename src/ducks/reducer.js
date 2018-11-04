const initialState = {
  username: '',
  id: 0,
  profilePicture: ''
}

const UPDATE_ID = 'UPDATE_ID';
const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PROFPIC = 'UPDATE_PROFPIC';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_ID:
      return Object.assign({}, state, {id: action.payload});
    case UPDATE_USERNAME:
      return Object.assign({}, state, {username: action.payload});
    case UPDATE_PASSWORD:
      return Object.assign({}, state, {password: action.payload});
    case UPDATE_PROFPIC:
      return Object.assign({}, state, {profilePicture: action.payload});
    default:
      return state;
  }
}

export function updateID(id) {
  return {
    type: UPDATE_ID,
    payload: id
  }
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  }
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    payload: password
  }
}

export function updateProfilePicture(pic) {
  return {
    type: UPDATE_PROFPIC,
    payload: pic
  }
}

export default reducer;