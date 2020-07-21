import axios from 'axios';
import formatTime from '../utils/constants';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_PROGRESS_SUCCESS = 'FETCH_PROGRESS_SUCCESS';
export const ADD_USERNAME = 'ADD_USERNAME';

function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
}

function fetchProductsSuccess(data) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    data,
  };
}

function fetchProgressSuccess(progress) {
  return {
    type: FETCH_PROGRESS_SUCCESS,
    progress,
  };
}

function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error,
  };
}

const addUsername = username => ({
  type: ADD_USERNAME,
  username,
});

function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('http://localhost:3001/api/v1/measurements.json',
      {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchProductsSuccess(res.data));
        return res.data.data;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

function fetchProgress() {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('http://localhost:3001/api/v1/progresses.json',
      {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchProgressSuccess(res.data));
        return res.data.data;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

function postMeasurement(id, seconds) {
  axios.post(
    'http://localhost:3001/api/v1/measurements',
    {
      time: formatTime(seconds),
      date: Date(),
      sport_id: id,
    },
    {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH',
      },
    },
  )
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      window.location.reload(false);
      return res;
    }).catch(error => error);
}

export {
  fetchProducts,
  fetchProductsError,
  addUsername,
  fetchProgress,
  postMeasurement,
};
