import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

 export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export const selectCategories = (state) => state.categories.categories;
export const selectSelectedCategory = (state) => state.categories.selectedCategory;

export default categorySlice.reducer;
