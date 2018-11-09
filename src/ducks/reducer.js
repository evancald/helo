const initialState = {
  username: '',
  profilePicture: ''
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';
const UPDATE_PROFPIC = 'UPDATE_PROFPIC';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const RESET_STATE = 'RESET_STATE';

function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_USERNAME:
      return Object.assign({}, state, {username: action.payload});
    case UPDATE_PASSWORD:
      return Object.assign({}, state, {password: action.payload});
    case UPDATE_PROFPIC:
      return Object.assign({}, state, {profilePicture: action.payload});
    case RESET_STATE:
      return action.payload;
    default:
      return state;
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

export function resetState() {
  return {
    type: RESET_STATE,
    payload: initialState
  }
}

export default reducer;