import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import usersReducer from "./users/users.reducer.js";

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();

  return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  usersReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;