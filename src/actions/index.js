import axios from 'axios';

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

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

function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error,
  };
}

function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsPending());
    axios.get('https://trackingapi-gon.herokuapp.com/api/v1/sports.json')
    /* fetch('https://trackingapi-gon.herokuapp.com/') */
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchProductsSuccess(res.data));
        return res.data;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export { fetchProducts };
