import React from "react";

export const themes = {
  light: {
    color: "#282c34",
    background: "#ffffff",
    padding: "10px",
  },
  dark: {
    padding: "10px",
    color: "#ffffff",
    background: "#282c34",
  },
};

export const ThemeContext = React.createContext(themes.dark);
