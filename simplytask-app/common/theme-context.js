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
    },
    light: {
        background: '#dee4e7',
        primaryText: '#222222',
        secondaryText: '#455a63',
        errorText: '#c00400',
        interactiveText: '#036ebe',
        disabledText: '#d0d8dc',
        borderColour: '#b5bebd',
    },
    dark: {
        background: '#37474f',
        primaryText: '#ffffff',
        secondaryText: '#afbec4',
        errorText: '#ffffff',
        interactiveText: '#ffffff',
        disabledText: '#d0d8dc',
        borderColour: '#b5bebd',
    },
    black: {
        background: '#222222',
        primaryText: '#ffffff',
        secondaryText: '#afbec4',
        errorText: '#ffffff',
        interactiveText: '#ffffff',
        disabledText: '#d0d8dc',
        borderColour: '#b5bebd',
    }
};

export const ThemeContext = createContext ({
    theme: themes.light,
    setTheme: () => {},
});