import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface counterState {
  count: number;
}
const initialState: counterState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initializeCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});
export const { initializeCount } = counterSlice.actions;
export default counterSlice.reducer;
