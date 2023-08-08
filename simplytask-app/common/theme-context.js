import { createContext } from "react";

export const themes = {
    white: {
        background: '#ffffff',
        primary: '#222222',
        secondary: '#455a63',
        error: '#c00400',
        link: '#036ebe',
        disabled: '#d0d8dc',
    },
    light: {
        background: '#dee4e7',
        primary: '#222222',
        secondary: '#455a63',
        error: '#c00400',
        link: '#036ebe',
        disabled: '#d0d8dc',
    },
    dark: {
        background: '#37474f',
        primary: '#ffffff',
        secondary: '#afbec4',
        error: '#ffffff',
        link: '#ffffff',
        disabled: '#d0d8dc',
    },
    black: {
        background: '#222222',
        primary: '#ffffff',
        secondary: '#afbec4',
        error: '#ffffff',
        link: '#ffffff',
        disabled: '#d0d8dc',
    }
};

export const ThemeContext = createContext ({
    theme: themes.light,
    setTheme: () => {},
});