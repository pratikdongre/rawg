import { useContext } from "react";
import NavBar from "./components/NavBar";
import { ThemeContext } from "./components/ThemeProvider";
import GameGrid from "./components/GameGrid";

import Sidebar from "./components/Sidebar";
const App = () => {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#f8fafc" : "#0f172a",
    color: theme === "light" ? "#0f172a" : "#f1f5f9",
  };
  return (
    <div className="flex flex-col" style={appStyle}>
      <div className="">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-1 ">
        <div className="  lg:w-40  hidden lg:block">
          <Sidebar></Sidebar>
        </div>
        <div className=" flex-1">
          <GameGrid></GameGrid>
        </div>
      </div>
    </div>
  );
};

export default App;
