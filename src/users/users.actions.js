import getUserData from "./users.gateWay.js";

export const SPINNER = "USERS/SHOW_SPINNER";
export const RECIVE = "USERS/RECIVE_USER_DATA";

export const showSpinner = () => {
  return {
    type: SPINNER,
  }
}

export const reciveUserData = (userData) => {
  return {
    type: RECIVE,
    payload: {
      userData,
    }
  }
}

export const fetchUserData = (userName) => {
  return function(dispatch) {
    dispatch(showSpinner());
    getUserData(userName)
      .then((userData) => {
        dispatch(reciveUserData(userData));
      });
  }
}