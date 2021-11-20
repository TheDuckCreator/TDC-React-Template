import api from "../../config/api";

import {
  ROOM_ALL,
  ROOM_GET,
  ROOM_CREATE,
  ROOM_UPDATE,
  ROOM_DELETE,
  ROOM_ERROR,
} from "../types";

// faker.locale = "th"

export const getAllRoom = () => async (dispatch) => {
  await api
    .get(`${process.env.REACT_APP_EACCOM_API_URL}/room/`)
    .then((res) => {
      console.log("Request Server to Get All Room according to the query");
      if (res.data) {
        dispatch({ type: ROOM_ALL, payload: res.data });
      } else {
        dispatch({
          type: ROOM_ERROR,
          payload: { error: "No Response Data" },
        });
      }
    })
    .catch((err) => {
      console.log("Error on Get All Room", err);
      dispatch({
        type: ROOM_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};

export const getOneRoom = (id) => async (dispatch) => {
  await api
    .get(`${process.env.REACT_APP_EACCOM_API_URL}/room/${id}`)
    .then((res) => {
      console.log("Request Server to Get One Room");
      if (res.data) {
        dispatch({ type: ROOM_GET, payload: res.data });
      } else {
        dispatch({
          type: ROOM_ERROR,
          payload: { error: "No Response Data" },
        });
      }
    });
};
export const createOneRoom = (payload) => async (dispatch) => {
  await api
    .post(`${process.env.REACT_APP_EACCOM_API_URL}/room/`, payload)
    .then(() => {
      console.log("Request Server to Create New Room");
      dispatch({ type: ROOM_CREATE });
    })
    .catch((err) => {
      dispatch({
        type: ROOM_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};

export const editOneRoom = (id, payload) => async (dispatch) => {
  await api
    .put(`${process.env.REACT_APP_EACCOM_API_URL}/room/${id}`, payload)
    .then(() => {
      console.log("Request Server to edit Room");
      dispatch({ type: ROOM_UPDATE });
    })
    .catch((err) => {
      dispatch({
        type: ROOM_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};

export const deleteOneRoom = (id) => async (dispatch) => {
  await api
    .delete(`${process.env.REACT_APP_EACCOM_API_URL}/room/${id}`)
    .then(() => {
      console.log("Request Server to Delete One Room");
      dispatch({ type: ROOM_DELETE, payload: null });
    })
    .catch((err) => {
      dispatch({
        type: ROOM_DELETE,
        payload: { error: err?.response?.data },
      });
    });
};
