import { combineReducers } from 'redux';
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
  garage: 'Dave\'s Cars',
  cars: carsReducer
});

export default rootReducer;
