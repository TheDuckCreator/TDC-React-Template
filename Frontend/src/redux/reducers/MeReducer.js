import { ME_ERROR, ME_GET, ME_LOGIN } from "../types";

const intialState = { isReady: false };

export default function MeReducer(state = intialState, action) {
  switch (action.type) {
    case ME_GET:
      return { ...action.payload, isReady: true };
    case ME_LOGIN:
      return { ...action.payload, isReady: true };

    case ME_ERROR: {
      return { ...action.payload, isReady: false };
    }
    default:
      return state;
  }
}
