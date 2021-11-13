import api from "../../Config/api";

import {
  BOOKING_ALL,
  BOOKING_GET,
  BOOKING_CREATE,
  BOOKING_UPDATE,
  BOOKING_DELETE,
  BOOKING_ERROR,
  BOOKING_VACANT,
} from "../types";

// faker.locale = "th"

export const getAllBooking =
  ({ page = 1, size = 100, start = null, end = null, name = "" }) =>
  async (dispatch) => {
    await api
      .get(
        `${process.env.REACT_APP_EACCOM_API_URL}/booking/?page=${page}${
          size !== null ? `&size=${size}` : ""
        }${start !== null ? `&start=${start}` : ""}${
          end !== null ? `&end=${end}` : ""
        }&name=${name}&orderByField=start&orderBy=asc`
      )
      .then((res) => {
        console.log("Request Server to Get All Booking according to the query");
        if (res.data) {
          dispatch({ type: BOOKING_ALL, payload: res.data });
        } else {
          dispatch({
            type: BOOKING_ERROR,
            payload: { error: "No Response Data" },
          });
        }
      })
      .catch((err) => {
        console.log("Error on Get All Booking", err);
        dispatch({
          type: BOOKING_ERROR,
          payload: { error: err?.response?.data },
        });
      });
  };

export const getAllVacants =
  ({
    page = 1,
    size = 100,
    checkInDate = null,
    checkOutDate = null,
    typeId = "",
    subTypeId = "",
  }) =>
  async (dispatch) => {
    await api
      .get(
        `${process.env.REACT_APP_EACCOM_API_URL}/booking/?page=${page}${
          size !== null ? `&size=${size}` : ""
        }${checkInDate !== null ? `&checkInDate=${checkInDate}` : ""}${
          checkOutDate !== null ? `&checkOutDate=${checkOutDate}` : ""
        }&typeId=${typeId}&subTypeId=${subTypeId}&orderByField=start&orderBy=asc`
      )
      .then((res) => {
        console.log("Request Server to Get All Vaccant according to the query");
        if (res.data) {
          dispatch({ type: BOOKING_VACANT, payload: res.data });
        } else {
          dispatch({
            type: BOOKING_ERROR,
            payload: { error: "No Response Data" },
          });
        }
      })
      .catch((err) => {
        console.log("Error on Get All Vacant Booking", err);
        dispatch({
          type: BOOKING_ERROR,
          payload: { error: err?.response?.data },
        });
      });
  };

export const getOneBooking = (id) => async (dispatch) => {
  await api
    .get(`${process.env.REACT_APP_EACCOM_API_URL}/booking/${id}`)
    .then((res) => {
      console.log("Request Server to Get One Booking");
      if (res.data) {
        dispatch({ type: BOOKING_GET, payload: res.data });
      } else {
        dispatch({
          type: BOOKING_ERROR,
          payload: { error: "No Response Data" },
        });
      }
    });
};
export const createOneBooking = (payload) => async (dispatch) => {
  await api
    .post(`${process.env.REACT_APP_EACCOM_API_URL}/booking/`, payload)
    .then(() => {
      console.log("Request Server to Create New Booking");
      dispatch({ type: BOOKING_CREATE });
    })
    .catch((err) => {
      dispatch({
        type: BOOKING_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};

export const editOneBooking = (id, payload) => async (dispatch) => {
  await api
    .put(`${process.env.REACT_APP_EACCOM_API_URL}/booking/${id}`, payload)
    .then(() => {
      console.log("Request Server to edit Booking");
      dispatch({ type: BOOKING_UPDATE });
    })
    .catch((err) => {
      dispatch({
        type: BOOKING_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};

export const deleteOneBooking = (id) => async (dispatch) => {
  await api
    .delete(`${process.env.REACT_APP_EACCOM_API_URL}/booking/${id}`)
    .then(() => {
      console.log("Request Server to Delete One Promotion");
      dispatch({ type: BOOKING_DELETE, payload: null });
    })
    .catch((err) => {
      dispatch({
        type: BOOKING_ERROR,
        payload: { error: err?.response?.data },
      });
    });
};
