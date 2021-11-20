import api from "../../Config/api";
import { SYSTEM_GET } from "../types";

export const systemConnect = () => async (dispatch) => {
  api
    .post(`${process.env.REACT_APP_EACCOM_API_URL}/user/login`, {
      username: process.env.REACT_APP_EACCOM_USER,
      password: process.env.REACT_APP_EACCOM_PASSWORD,
    })
    .then((res) => {
      const { accessToken } = res?.data;
      window.localStorage.setItem("SERVER_TOKEN", accessToken);
      console.log("Set Access Token", accessToken);
      dispatch({ type: SYSTEM_GET, payload: { accessToken, isReady: true } });
    })
    .catch((error) => {
      console.log("Get Token Fail", error);
    });
};
