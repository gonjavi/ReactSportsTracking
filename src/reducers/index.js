import { combineReducers } from 'redux';
import sportReducer from './data';
import userReducer from './user';
import progressReducer from './progress';

const index = combineReducers({
  data: sportReducer,
  user: userReducer,
  progress: progressReducer,
});

export default index;
