import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import { ThemeContext } from "./components/ThemeProvider";
import GameGrid from "./components/GameGrid";

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
    color: theme === "light" ? "#000000" : "#ffffff",
  };
  return (
    <div className="h-screen flex flex-col" style={appStyle}>
      <div className="">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-1 ">
        <div className=" w-40  hidden lg:block">side</div>
        <div className=" flex-1">
          <GameGrid></GameGrid>
        </div>
      </div>
    </div>
  );
};

export default App;
