import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

 export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ category, limit, skip }) => {
    const response = await axios.get(`https://dummyjson.com/products`, {
      params: { limit, skip, category },
    });
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    total: 0,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = [...state.products, ...action.payload.products];  
        state.total = action.payload.total;
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productSlice.reducer;
