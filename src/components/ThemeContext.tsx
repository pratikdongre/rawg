import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

// import { ThemeProvider } from "./context/ThemeContext";

// const App = () => (
//     <ThemeProvider>
//       <YourApp />
//     </ThemeProvider>
//   );

/*
import { useTheme } from "../context/ThemeContext";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="cursor-pointer flex items-center gap-2">
      {isDark ? <FaMoon /> : <IoMdSunny />}
      <p>{isDark ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
};
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
  ...
</div>

*/
