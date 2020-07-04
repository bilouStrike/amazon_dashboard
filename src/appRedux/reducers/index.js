import {combineReducers} from "redux";
import Settings from "./Settings";
import Common from "./Common";
import {connectRouter} from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  commonData: Common,
});
