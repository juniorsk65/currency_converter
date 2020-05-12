import React, { useContext } from "react";
import logo from "../../logo.svg";
import Converter from "../Converter";
import { ThemeContext } from "../../themes";
import "./styles.css";

function Layout() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App" style={theme}>
      <div className="App-header" style={theme}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Aprendendo React</p>
      </div>
      <div className="App-section">
        <Converter />
      </div>
    </div>
  );
}

export default Layout;
