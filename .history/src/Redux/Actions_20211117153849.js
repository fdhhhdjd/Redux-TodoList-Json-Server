import axios from "axios";
import * as types from "./ActionTypes";

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});
export const loadUser = () => {
  return function (dispatch) {
    dispatch(loadUsersStart());
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((response) => {
        dispatch(loadUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadUsersError(error));
      });
  };
};
