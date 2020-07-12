import { combineReducers } from 'redux';
import sportReducer from './data';

const index = combineReducers({
  data: sportReducer,
});

export default index;
