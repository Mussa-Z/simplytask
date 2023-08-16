import {createContext} from "react";

export const SettingsContext = createContext({
    settingsData: {},
    setSettingsData: () => {},
});