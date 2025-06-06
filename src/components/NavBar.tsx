import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { IoMdSunny } from "react-icons/io";
import SearchInput from "./SearchInput";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeProvider";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center ">
      <img src={logo} alt="" className="w-12 h-12" />

      <div className="flex flex-row items-center flex-1 border-1  rounded-3xl m-2 p-1 ">
        <SearchInput></SearchInput>
      </div>

      <div className="flex items-center p-2 gap-2">
        {theme === "dark" ? (
          <p className="m-0">Dark Mode</p>
        ) : (
          <p className="m-0">Light Mode</p>
        )}

        <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "dark" ? (
            <FaMoon className="w-8 h-8" />
          ) : (
            <IoMdSunny className="w-8 h-8" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
