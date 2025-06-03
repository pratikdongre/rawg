import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-amber-300">
        <NavBar></NavBar>
      </div>
      <div className="flex flex-1 ">
        <div className="bg-teal-600 flex-1 hidden lg:block">side</div>
        <div className="bg-green-900 flex-1">main</div>
      </div>
    </div>
  );
};

export default App;
