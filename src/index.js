import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

const garageName = 'Dave\'s Cars'
const initialState ={
  garage: garageName,
  cars: []
}

const middlewares = applyMiddleware(logger, reduxPromise);
const store = createStore(rootReducer, initialState, middlewares);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <App />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
