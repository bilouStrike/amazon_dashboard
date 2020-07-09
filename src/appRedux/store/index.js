import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import createRootReducer from '../reducers';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const createBrowserHistory = require('history').createBrowserHistory;

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);

const middlewares = [logger, routeMiddleware, sagaMiddleware];

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        ...middlewares
      ),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
