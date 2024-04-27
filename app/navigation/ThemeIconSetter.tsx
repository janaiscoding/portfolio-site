import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Sun from "../ui_components/icons/Sun";
import Moon from "../ui_components/icons/Moon";

const ThemeIconSetter = () => {
  const themeContext = useContext(ThemeContext);

  const handleThemeToggle = () => {
    console.log('handle theme toggle')
    if (themeContext.current === "dark") {
      document.documentElement.classList.remove("dark");
      themeContext.setCurrent("light");
    } else {
      document.documentElement.classList.add("dark");
      themeContext.setCurrent("dark");
    }
  };

  return (
    <div className="hover:cursor-pointer" onClick={handleThemeToggle}>
      {themeContext.current === "dark" ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeIconSetter;