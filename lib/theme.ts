import { generateTheme } from "salt-theme-gen";

export const theme = generateTheme({ preset: "ocean" });
export const lightMode = theme.light;
export const darkMode = theme.dark;
