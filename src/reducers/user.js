import { ADD_USERNAME } from '../actions/index';

const initialState = {
  username: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
}
