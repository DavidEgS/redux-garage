import { SET_CARS, SET_CAR } from '../actions';

const carsReducer = (state=[], action) => {
  switch(action.type) {
    case SET_CARS:
      return action.payload;
    case SET_CAR:
      return [ action.payload ];
    default:
      return state;
  }
};

export default carsReducer;
