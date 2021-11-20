import { combineReducers } from "redux";

import UserReducer from "./UserReducer";
import MeReducer from "./MeReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  me: MeReducer,
});

export default rootReducer;
