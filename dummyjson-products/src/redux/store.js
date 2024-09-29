 


import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import categoriesReducer from './categorySlice';
// import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
 });

export default store;
