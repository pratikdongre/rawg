import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { IoMdSunny } from "react-icons/io";
import SearchInput from "./SearchInput";
import { FaMoon } from "react-icons/fa";

const NavBar = () => {
  const [toggleColor, setColorMode] = useState(true);
  return (
    <div className="flex items-center ">
      <img src={logo} alt="" className="w-12 h-12" />

      <div className="flex flex-row items-center flex-1 bg-black rounded-3xl m-2 p-1 ">
        <SearchInput></SearchInput>
      </div>

      <div className="flex items-center p-2 gap-2">
        {toggleColor ? (
          <p className="m-0">Dark Mode</p>
        ) : (
          <p className="m-0">Light Mode</p>
        )}

        <div onClick={() => setColorMode(!toggleColor)}>
          {toggleColor ? (
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
