import api from "../../config/localApi";
import { ME_GET, ME_ERROR, ME_LOGIN } from "../types";

export const meLogin = (payload) => async (dispatch) => {
  await api
    .post(`${process.env.REACT_APP_API_URL}/user/login`, payload)
    .then((res) => {
      console.log("Res", res.data);
      const { authToken, _id } = res?.data;
      window.localStorage.setItem("LOCAL_TOKEN", authToken);
      window.localStorage.setItem("USER_ID", _id);
      console.log("Set Local Token Success", authToken);
      dispatch({ type: ME_LOGIN, payload: { isReady: true } });
    })
    .catch((err) => {
      console.error("Error", err);
      dispatch({
        type: ME_ERROR,
        payload: { isReady: false, error: err?.message },
      });
    });
};

export const meGet = () => async (dispatch) => {
  const userId = window.localStorage.getItem("USER_ID");
  await api
    .get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
    .then((res) => {
      console.log("Me Get OK");
      dispatch({ type: ME_GET, payload: res.data });
    })
    .catch((err) => {
      console.error("Error on Me Get", err);
      dispatch({
        type: ME_ERROR,
        payload: { isReady: false, error: err?.message },
      });
    });
};
