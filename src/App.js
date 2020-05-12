import React, { useState } from "react";
import { ThemeContext, themes } from "./themes";
import "./App.css";
import Layout from "./components/Layout";

export default function App() {
  const [theme, setTheme] = useState(themes.dark);

  function toggleTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div style={theme}>
        <button onClick={toggleTheme}>Mudar Tema</button>
        <Layout />
      </div>
    </ThemeContext.Provider>
  );
}
