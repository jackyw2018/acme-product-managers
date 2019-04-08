import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

// ACTION TYPES
const FETCH_MANAGERS = 'FETCH_MANAGERS';
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

// ACTION CREATORS
const fetchManagers = managers => ({
  type: FETCH_MANAGERS,
  managers,
});

const fetchProducts = products => ({
  type: FETCH_PRODUCTS,
  products,
});

// THUNK CREATORS
export const getManagers = () => dispatch => {
  return axios
    .get('/api/users')
    .then(({ data }) => dispatch(fetchManagers(data)));
};

export const getProducts = () => dispatch => {
  return axios
    .get('/api/products')
    .then(({ data }) => dispatch(fetchProducts(data)));
};

export const putProduct = (id, managerId) => dispatch => {
  id = String(id);
  managerId = Number(managerId) || null;
  return axios.put(`/api/products/${id}`, { userId: managerId }).then(() => {
    dispatch(getManagers());
    dispatch(getProducts());
  });
};

// INITIAL STATE
const initialState = {
  managers: [],
  products: [],
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MANAGERS: {
      return {
        ...state,
        managers: action.managers,
      };
    }
    case FETCH_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }
    default: {
      return state;
    }
  }
};

// STORE
export default createStore(reducer, applyMiddleware(thunk));
