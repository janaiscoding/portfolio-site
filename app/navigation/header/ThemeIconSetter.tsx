import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Sun from "../../ui_components/icons/Sun";
import Moon from "../../ui_components/icons/Moon";

const ThemeIconSetter = () => {
  const themeContext = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (themeContext.current === "dark") {
      // remove dark
      document.documentElement.classList.remove("dark");
      // set light
      document.documentElement.classList.add("light");
      themeContext.setCurrent("light");
      localStorage.setItem("theme", "light");
    } else {
      // remove light
      document.documentElement.classList.remove("light");
      //set dark
      document.documentElement.classList.add("dark");
      themeContext.setCurrent("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="hover:cursor-pointer" onClick={handleThemeToggle}>
      {themeContext.current === "dark" ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeIconSetter;
