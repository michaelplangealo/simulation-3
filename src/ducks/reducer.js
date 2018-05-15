import axios from "axios";

// initial state
const initialState = {
  username: [],
  password: [],
  id: [],
  profile: []
};

// action types
const ADD_USER = "ADD_USER";

// reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${ADD_USER}_FULFILLED`:
    default:
      return state;
  }
}
