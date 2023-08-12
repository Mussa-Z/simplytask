import { createContext } from "react";

export const themes = {
    white: {
        background: '#ffffff',
        primaryText: '#222222',
        secondaryText: '#455a63',
        errorText: '#c00400',
        interactiveText: '#036ebe',
        disabledText: '#d0d8dc',
        borderColour: '#b5bebd',
        // update below
        cardBackground: '#4b5961',
        buttonColorful: '#98dab6',
        buttonColorfulText: '#222222',
        buttonNeutral: '#5f6c73',
        buttonNeutralText: '#e5e6e8',
        drawerBackground: '#5f6c73',
    },
    light: {
        background: '#dee4e7',
        primaryText: '#222222',
        secondaryText: '#455a63',
        errorText: '#c00400',
        interactiveText: '#036ebe',
        disabledText: '#d0d8dc',
        borderColour: '#b5bebd',
        // update below
        cardBackground: '#4b5961',
        buttonColorful: '#98dab6',
        buttonColorfulText: '#222222',
        buttonNeutral: '#5f6c73',
        buttonNeutralText: '#e5e6e8',
        drawerBackground: '#5f6c73',
    },
    dark: {
        background: '#37474f',
        primaryText: '#ffffff',
        secondaryText: '#afbec4',
        errorText: '#ffffff',
        interactiveText: '#ffffff',
        disabledText: '#5f7073',
        borderColour: '#98dab6',  //3b4951
        cardBackground: '#4b5961',
        buttonColorful: '#98dab6',
        buttonColorfulText: '#222222',
        buttonNeutral: '#5f6c73',
        buttonNeutralText: '#e5e6e8',
        drawerBackground: '#5f6c73',
    },
    black: {
        background: '#222222',
        primaryText: '#ffffff',
        secondaryText: '#afbec4',
        errorText: '#ffffff',
        interactiveText: '#ffffff',
        disabledText: '#d0d8dc',
        borderColour: '#b5bebd',
        // update below
        cardBackground: '#4b5961',
        buttonColorful: '#98dab6',
        buttonColorfulText: '#222222',
        buttonNeutral: '#5f6c73',
        buttonNeutralText: '#e5e6e8',
        drawerBackground: '#5f6c73',
    }
};

export const ThemeContext = createContext ({
    theme: themes.light,
    setTheme: () => {},
});