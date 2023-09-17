// global context for settings data so that all components
// can access it. settings has the folllowing attributes

// - avatars (array of objects)
// - chosenAvatar (object)
// - levels (array of objects)
// - exp (number)
// - currentLevel (object)
// - karma (number)
// - themeOptions (array of strings)
// - theme (string)
// - distractionFree (boolean)

import {createContext} from "react";

export const SettingsContext = createContext({
    settingsData: {},
    setSettingsData: () => {},
});