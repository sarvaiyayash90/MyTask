import { combineReducers } from "redux";
import tableReducer from "./reducer";

const rootReducer = combineReducers({
  table: tableReducer,
});
export default rootReducer;
