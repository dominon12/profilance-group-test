import * as types from "./Types";

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return action.payload;
    case types.REMOVE_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
