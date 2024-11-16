import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    visible: false,
  },
  reducers: {
    ShowPopup: (state) => {
        state.visible = true;
        useEffect(() => {
            let timeout;
            if (state.visible) {
                timeout = setTimeout(() => {
                    state.visible = false;
                }, 3000);
            }
            return () => clearTimeout(timeout);
        }, [state.visible]);
    }
  }
});

export const { setAuth, clearAuth } = popupSlice.actions;
export default popupSlice.reducer;
