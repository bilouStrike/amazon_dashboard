import {combineReducers} from "redux";
import Settings from "./Settings";
import Common from "./Common";
import authReducer from "./Auth";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {connectRouter} from 'connected-react-router'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const rootReducer = combineReducers({
  settings: Settings,
  commonData: Common,
  auth: authReducer
});

export default persistReducer(persistConfig, rootReducer);
