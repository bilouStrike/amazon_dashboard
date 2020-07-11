import { applyMiddleware, createStore}  from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers';
import rootSaga from '../sagas/index';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const createBrowserHistory = require('history').createBrowserHistory;

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);

const middlewares = [thunk, logger, routeMiddleware, sagaMiddleware];

export const store = createStore(
  rootReducer, // root reducer with router state
    applyMiddleware(
      ...middlewares
  ),
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default { store, persistor } ;
