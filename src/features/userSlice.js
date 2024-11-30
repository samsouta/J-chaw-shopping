import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      Cookies.set("user", JSON.stringify(payload.user)),
        Cookies.set("token", payload.token);
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
