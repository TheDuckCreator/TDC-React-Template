import api from "../../config/localApi";

import {
  USER_ALL,
  USER_GET,
  USER_CREATE,
  USER_UPDATE,
  USER_DELETE,
  USER_ERROR,
} from "../types";

// faker.locale = "th"

export const getAllUser = () => async (dispatch) => {
  await api
    .get(`${process.env.REACT_APP_API_URL}/user/`)
    .then((res) => {
      console.log("Request Server to Get All USER according to the query");
      if (res.data) {
        dispatch({ type: USER_ALL, payload: res.data });
      } else {
        dispatch({
          type: USER_ERROR,
          payload: { error: "No Response Data" },
        });
      }
    })
    .catch((err) => {
      console.log("Error on Get All USER", err);
      dispatch({
        type: USER_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};

export const getOneUser = (id) => async (dispatch) => {
  await api.get(`${process.env.REACT_APP_API_URL}/user/${id}`).then((res) => {
    console.log("Request Server to Get One USER");
    if (res.data) {
      dispatch({ type: USER_GET, payload: res.data });
    } else {
      dispatch({
        type: USER_ERROR,
        payload: { error: "No Response Data" },
      });
    }
  });
};
export const createOneUser = (payload) => async (dispatch) => {
  await api
    .post(`${process.env.REACT_APP_API_URL}/user/`, payload)
    .then((res) => {
      console.log(res.data);
      console.log("Request Server to Create New USER");
      dispatch({ type: USER_CREATE });
    })
    .catch((err) => {
      console.log("Error ", err);
      dispatch({
        type: USER_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};

export const editOneUser = (id, payload) => async (dispatch) => {
  console.log("Dispatch is Call");
  await api
    .put(`${process.env.REACT_APP_API_URL}/user/${id}`, payload)
    .then((res) => {
      console.log("Request Server to edit USER");
      dispatch({ type: USER_UPDATE });
    })
    .catch((err) => {
      console.log("Error ", err);
      dispatch({
        type: USER_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};

export const deleteOneUser = (id) => async (dispatch) => {
  await api
    .delete(`${process.env.REACT_APP_API_URL}/user/${id}`)
    .then(() => {
      console.log("Request Server to Delete One Promotion");
      dispatch({ type: USER_DELETE, payload: null });
    })
    .catch((err) => {
      dispatch({
        type: USER_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};
