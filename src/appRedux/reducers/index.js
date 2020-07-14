import { combineReducers } from "redux";
import Settings from "./Settings";
import Common from "./Common";
import authReducer from "./Auth";
import rolesReducer from "./Roles";
import permissionsReducer from "./Permissions";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const rootReducer = combineReducers({
  settings: Settings,
  commonData: Common,
  auth: authReducer,
  roles: rolesReducer,
  permissions: permissionsReducer
});

export default persistReducer(persistConfig, rootReducer);
