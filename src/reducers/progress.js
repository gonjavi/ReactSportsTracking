import { FETCH_PROGRESS_SUCCESS } from '../actions/index';

const initialState = {
  progress: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROGRESS_SUCCESS:
      return {
        ...state,
        progress: action.progress,
      };
    default:
      return state;
  }
}

export const getProgress = state => state.progress;
