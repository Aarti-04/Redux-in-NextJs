import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface userState {
  users: any;
}
const initialState: userState = { users: [] };

const Slice = createSlice({
  name: "AddUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      console.log("in persist");

      const data = { id: nanoid(), name: action.payload };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      const dataToRemove = action.payload;
      const userExist = state.users.some(
        (user: any) => user.id === dataToRemove.id
      );
      if (userExist) {
        const updatedUser = state.users.filter(
          (user: any) => user.id != dataToRemove.id
        );
        state.users = updatedUser;
      }
      console.log(state.users);
    },
  },
});
export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
