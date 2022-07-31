import { SPINNER, RECIVE } from "./users.actions.js";

const initialStore = {
  isFetching: false,
  userData: null,
};

const usersReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SPINNER:
      return {
        ...state,
        isFetching: true
      };
    case RECIVE:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false
      };
    default:
      return state;
  }
};

export default usersReducer;