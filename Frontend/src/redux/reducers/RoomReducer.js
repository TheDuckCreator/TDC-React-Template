import {
  ROOM_ALL,
  ROOM_CREATE,
  ROOM_UPDATE,
  ROOM_GET,
  ROOM_DELETE,
  ROOM_ERROR,
} from "../types";

const intialState = { isReady: false };

export default function RoomReducer(state = intialState, action) {
  switch (action.type) {
    case ROOM_ALL:
      return { ...action.payload, isReady: true };
    case ROOM_GET:
      return { ...action.payload, isReady: true };
    case ROOM_CREATE:
      return { ...action.payload, isReady: false };
    case ROOM_UPDATE: {
      return { ...action.payload, isReady: false };
    }
    case ROOM_DELETE: {
      return { ...action.payload, isReady: false };
    }
    case ROOM_ERROR: {
      return { ...action.payload, isReady: false };
    }
    default:
      return state;
  }
}
