// global context for theme so that all components can access
// predefined themes are in themes

import { createContext } from "react";

export const themes = {
    white: {
        background: '#ffffff',
        primaryText: '#222222',
        secondaryText: '#455a63',
        errorText: '#c00400',
        interactiveText: '#036ebe',
        disabledText: '#d0d8dc',
        borderColour: '#dceae2', //#b5bebd
        cardBackground: '#ffffff',
        buttonColorful: '#98dab6',
        buttonColorfulText: '#222222',
        buttonNeutral: '#ffffff',
        buttonNeutralText: '#e5e6e8',
        drawerBackground: '#ffffff',
        shadow: '#aac5b6'
    },
    light: {
        background: '#dee4e7',
        primaryText: '#222222',
        secondaryText: '#454c48', //'#455a63'
        errorText: '#c00400',
        interactiveText: '#036ebe',
        disabledText: '#d0d8dc',
        borderColour: '#cedad3', //#b5bebd
        cardBackground: '#f9f9f9',
        buttonColorful: '#98dab6',
        buttonColorfulText: '#222222',
        buttonNeutral: '#f9f9f9',
        buttonNeutralText: '#e5e6e8',
        drawerBackground: '#f9f9f9',
        shadow: '#aac5b6'
    },
    dark: {
        background: '#37474f',
        primaryText: '#ffffff',
        secondaryText: '#afbec4',
        errorText: '#ffffff',
        interactiveText: '#ffffff',
        disabledText: '#5f7073',
        borderColour: '#303d44',  //3b4951
        cardBackground: '#4b5961',
        buttonColorful: '#98dab6',
        buttonColorfulText: '#222222',
        buttonNeutral: '#5f6c73',
        buttonNeutralText: '#e5e6e8',
        drawerBackground: '#5f6c73',
        shadow: '#000000'
    },
    black: {
        background: '#222222',
        primaryText: '#ffffff',
        secondaryText: '#afbec4',
        errorText: '#ffffff',
        interactiveText: '#ffffff',
        disabledText: '#4c4c4c',
        borderColour: '#1e1e1e',
        cardBackground: '#373737',
        buttonColorful: '#98dab6',
        buttonColorfulText: '#222222',
        buttonNeutral: '#4c4c4c',
        buttonNeutralText: '#5d5549',
        drawerBackground: '#4c4c4c',
        shadow: '#000000'
    }
};

export const ThemeContext = createContext ({
    theme: themes.light,
    setTheme: () => {},
});