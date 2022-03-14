import axios from 'axios';

// ACTION TYPE:
const SET_MATCHES = 'SET_MATCHES';

// ACTION CREATOR:
export const setMatches = (matches) => {
  return {
    type: SET_MATCHES,
    matches,
  };
};

// THUNK CREATOR:
export const fetchMatches = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/matches`);
      await dispatch(setMatches(data));
    } catch (error) {
      console.log(error);
    }
  };
};

//INITIAL STATE:
const initialState = [];

//SUB-REDUCER:
export default function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MATCHES:
      return action.matches;
    default:
      return state;
  }
}