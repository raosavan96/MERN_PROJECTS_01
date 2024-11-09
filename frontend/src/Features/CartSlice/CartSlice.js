import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
};

export const addCartSlice = createSlice({
  name: "add cart",
  initialState,
  reducers: {
    addCartFun: (state, action) => {
      state.value.push({...action.payload});
    }
  }
});

export const { addCartFun } = addCartSlice.actions;
export default addCartSlice.reducer;
