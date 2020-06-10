export const SET_CARS = 'SET_CARS';
export const SET_CAR = 'SET_CAR';
export const CAR_CREATED = 'CAR_CREATED';

export function setCars() {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/davescars/cars`)
    .then(response => response.json());

  return {
    type: 'SET_CARS',
    payload: promise
  }
}

export function setCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());

  return {
    type: 'SET_CAR',
    payload: promise
  }
}


export function createCar(body, garage) {
const request = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(body)
}).then(response => response.json())
return {
type: CAR_CREATED,
payload: request
};
}
