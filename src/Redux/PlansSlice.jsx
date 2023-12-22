import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Planurl } from '../Axios';

const name = 'plan';

const initialState = {
  plan: [],
  loading: false,
};

export const fetchplan = createAsyncThunk('get/fetchplan', () => {
  return Planurl.get('/plan').then((res) => res);
});

const planSlice = createSlice({
  name,
  initialState,
  extraReducers: {
    // get data
    [fetchplan.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchplan.fulfilled]: (state, action) => {
      state.plan = action.payload;
    },
    [fetchplan.rejected]: (state, action) => {
      state.loading = false;
    },
    // plan: (state, action) => {
    //   state.plan = action.payload;
    // },
  },
});

export const { plan } = planSlice.actions;
export const PlanReducer = planSlice.reducer;
export const selectplan = (state) => state.plan.plan;
export const selectplanloading = (state) => state.plan.loading;
