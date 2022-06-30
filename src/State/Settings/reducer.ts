import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IconTheme, SettingsProps } from "../../Types";

export const initialState: SettingsProps = {
  iconTheme: IconTheme.antd,
  mobileOpen: false
};


const slice = createSlice({
  name: "Settings",
  initialState,
  reducers: {
    toggleIcon: (state, action: PayloadAction<IconTheme>) => ({ ...state, iconTheme: action.payload }),
    toggleMobileOpen: (state) => ({ ...state, mobileOpen: !state.mobileOpen }),
  },
});

export const { toggleMobileOpen, toggleIcon } = slice.actions;
export const settingsReducer = slice.reducer;
