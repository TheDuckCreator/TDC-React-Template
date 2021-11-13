import { combineReducers } from "redux";

import SystemReducer from "./systemReducer";
import BookingReducer from "./BookingReducer";
import RoomReducer from "./RoomReducer";

const rootReducer = combineReducers({
  system: SystemReducer,
  booking: BookingReducer,
  room: RoomReducer,
});

export default rootReducer;
