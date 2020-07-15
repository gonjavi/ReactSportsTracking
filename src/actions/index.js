export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
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
    fetch('https://trackingapi-gon.herokuapp.com/api/v1/measurements.json',
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

export { fetchProducts, fetchProductsError, addUsername };
