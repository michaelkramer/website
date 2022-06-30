import { createSelector } from "reselect";
import { SettingsProps } from "../../Types";

const fetchSettings = (state: any) => state.settings;

export const selectSettings = createSelector(fetchSettings, (settings: SettingsProps) => settings);

export const selectMobileOpen = createSelector(selectSettings, (settings: SettingsProps) => settings.mobileOpen);
