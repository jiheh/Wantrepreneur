'use strict';

const _ = require('lodash');

const initialState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const RESET_CART = 'RESET_CART';
const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REMOVE_MULTIPLE_FROM_CART = 'REMOVE_MULTIPLE_FROM_CART';

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const resetCart = () => {
  return {
    type: RESET_CART,
    payload: null
  };
};

export const addMultipleToCart = (products) => {
  return {
    type: ADD_MULTIPLE_TO_CART,
    payload: products
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  };
};

export const removeMultipleFromCart = (products) => {
  return {
    type: REMOVE_MULTIPLE_FROM_CART,
    payload: products
  };
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return _.unionBy(state, [action.payload], 'id');
    case REMOVE_FROM_CART:
      //return state.filter(product => product.id !== action.payload.id);
      return _.differenceBy(state, [action.payload], 'id');
    case REMOVE_MULTIPLE_FROM_CART:
      return _.differenceBy(state, action.payload, 'id');
    case RESET_CART:
      return [];
    case ADD_MULTIPLE_TO_CART:
      return _.unionBy(state, action.payload, 'id');
    default:
      return state;
  }
}
