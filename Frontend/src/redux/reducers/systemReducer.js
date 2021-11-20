import { SYSTEM_GET } from "../types";

const intialState = { isReady: false };
export default function SystemReducer(state = intialState, action) {
  switch (action.type) {
    case SYSTEM_GET:
      return action.payload;

    default:
      return state;
  }
}
