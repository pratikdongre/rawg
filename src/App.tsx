import { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { ThemeContext } from "./components/ThemeProvider";
import GameGrid from "./components/GameGrid";

export interface GameQuery {
  genre: genres | null;
}

import Sidebar from "./components/Sidebar";
import type { genres } from "./components/hooks/useGenre";
const App = () => {
  const [GameQuery, SetGameQuery] = useState<GameQuery>({} as GameQuery);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(GameQuery);
  }, [GameQuery]);
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
        <div className="  lg:w-50  hidden lg:block">
          <Sidebar
            selectedGenre={GameQuery.genre}
            onSelectedGenre={(genre) => SetGameQuery({ ...GameQuery, genre })}
          ></Sidebar>
        </div>
        <div className=" flex-1">
          <GameGrid GameQuery={GameQuery}></GameGrid>
        </div>
      </div>
    </div>
  );
};

export default App;
