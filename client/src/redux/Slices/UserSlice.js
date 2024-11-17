import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    token: "temtoken",
    username: "Алексей",
    publicName: "Алексей",
    surname: "Антошкин-круглов",
    number: "+7 (800) 555-35-35",
    email: "imposter@sus.io",
    birthday: Date.now(),
    sign: 2,
    photo: ""
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      console.log(action.payload.id);
      try {
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.username = action.payload.username;
      } catch {
        console.log('error');
      };
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
