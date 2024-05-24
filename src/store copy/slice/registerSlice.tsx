import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type registerType = {
  username: string;
  email: string;
  password: string;
};

const initialValue: registerType = {
  username: "",
  email: "",
  password: "",
};
export const registerSlice = createSlice({
  name: "register",
  initialState: initialValue,
  reducers: {
    // username: (state) => {
    //   state.username = state.username;
    // },
    // email: (state) => {
    //   state.email = state.email;
    // },
    // password: (state) => {
    //   state.email = state.Password;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    enterRegister: (state, action: PayloadAction<registerType>) => {
      //   state.username = action.payload.username;
      //   state.email = action.payload.email;
      //   state.password = action.payload.password;
      return {
        ...state,
        ...action.payload,
      };
    },
    clearForm(state) {
      return {
        ...state,
        ...initialValue,
      };
    },
  },
});
export const { enterRegister, clearForm } = registerSlice.actions;
export default registerSlice.reducer;
