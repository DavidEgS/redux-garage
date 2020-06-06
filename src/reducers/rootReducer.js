import { combineReducers } from 'redux';
import carsReducer from './carsReducer';

const rootReducer = combineReducers({
  garage: 'davescars',
  cars: carsReducer
});

export default rootReducer;
