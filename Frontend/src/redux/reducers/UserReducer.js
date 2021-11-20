import {
  USER_ALL,
  USER_CREATE,
  USER_UPDATE,
  USER_GET,
  USER_DELETE,
  USER_ERROR,
} from "../types";

const intialState = { isReady: false };

export default function UserReducer(state = intialState, action) {
  switch (action.type) {
    case USER_ALL:
      return { ...action.payload, isReady: true };
    case USER_GET:
      return { ...action.payload, isReady: true };
    case USER_CREATE:
      return { ...action.payload, isReady: false };
    case USER_UPDATE: {
      return { ...action.payload, isReady: false };
    }
    case USER_DELETE: {
      return { ...action.payload, isReady: false };
    }
    case USER_ERROR: {
      return { ...action.payload, isReady: false };
    }
    default:
      return state;
  }
}
