import * as types from "./Types";

export const addUser = (email) => ({
  type: types.ADD_USER,
  payload: {
    email,
  },
});

export const removeUser = () => ({
  type: types.REMOVE_USER,
});
