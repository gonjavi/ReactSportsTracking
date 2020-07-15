import { combineReducers } from 'redux';
import sportReducer from './data';
import userReducer from './user';

const index = combineReducers({
  data: sportReducer,
  user: userReducer,
});

export default index;
