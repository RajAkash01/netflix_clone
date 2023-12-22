import { createSlice } from '@reduxjs/toolkit';

const name = 'image';

const initialState = {
  image:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
};

const imageSlice = createSlice({
  name,
  initialState,
  reducers: {
    // get data
    Imagesss: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { Imagesss } = imageSlice.actions;
export const ImageReducer = imageSlice.reducer;
export const selectImage = (state) => state.image;
