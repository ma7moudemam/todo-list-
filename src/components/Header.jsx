import React, { useState } from "react";
import classes from "./Header.module.css";
import Sun from "./../assets/images/icon-sun.svg";
import Moon from "./../assets/images/icon-moon.svg";
import { useDispatch } from "react-redux";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    setIsDark(!isDark);
    dispatch({ type: "TOGGLE_THEME", payload: !isDark ? "dark" : "light" });
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  const currentTheme = localStorage.getItem("theme");

  const content =
    currentTheme === "dark" ? (
      <img src={Sun} alt="sun" onClick={toggleTheme} />
    ) : (
      <img src={Moon} alt="moon" onClick={toggleTheme} />
    );

  return (
    <header className={classes.header}>
      <div className={classes.innerHeader}>
        <h1>TODO</h1>
        {content}
      </div>
    </header>
  );
};

export default Header;
