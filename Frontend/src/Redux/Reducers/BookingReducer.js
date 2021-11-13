import {
  BOOKING_ALL,
  BOOKING_CREATE,
  BOOKING_DELETE,
  BOOKING_GET,
  BOOKING_UPDATE,
  BOOKING_ERROR,
  BOOKING_VACANT,
} from "../types";

const intialState = { isReady: false };
export default function BookingReducer(state = intialState, action) {
  switch (action.type) {
    case BOOKING_ALL:
      return { ...action.payload, isReady: true };
    case BOOKING_VACANT:
      return { ...action.payload, isReady: true };
    case BOOKING_GET:
      return { ...action.payload, isReady: true };
    case BOOKING_CREATE:
      return { ...action.payload, isReady: false };
    case BOOKING_UPDATE: {
      return { ...action.payload, isReady: false };
    }
    case BOOKING_DELETE: {
      return { ...action.payload, isReady: false };
    }
    case BOOKING_ERROR: {
      return { ...action.payload, isReady: false };
    }
    default:
      return state;
  }
}
