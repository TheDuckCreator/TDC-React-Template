import { combineReducers } from "redux";

import SystemReducer from "./systemReducer";
import BookingReducer from "./BookingReducer";
import RoomReducer from "./RoomReducer";
import UserReducer from "./UserReducer";
import MeReducer from "./MeReducer";

const rootReducer = combineReducers({
  system: SystemReducer,
  booking: BookingReducer,
  room: RoomReducer,
  user: UserReducer,
  me: MeReducer,
});

export default rootReducer;
