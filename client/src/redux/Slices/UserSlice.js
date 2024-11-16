import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: 'temtoken',
    username: "Алексей",
    publicName: "Алексей",
    surname: "Антошкин-круглов",
    number: "+7 (800) 555-35-35",
    email: "imposter@sus.io",
    birthday: Date.now(),
    sign: 2,
    photo: "",
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username;

      

    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.username = null;
    }
  }
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
