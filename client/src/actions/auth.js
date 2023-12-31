import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (form, router) => async dispatch => {
  //functionalitate sign in
  try {
    const { data } = await api.signIn(form);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (form, router) => async dispatch => {
  //functionalitate sign up
  try {
    const { data } = await api.signUp(form);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
