import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  garage: 'davescars',
  cars: carsReducer,
  form: formReducer
});

export default rootReducer;
