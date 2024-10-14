import { createContext, useContext, useEffect } from "react";
import propType from "prop-types";
import { useLocalStorageState } from "../Hooks/useLocalStorageState";

const AppsContext = createContext();

function AppContext({ children }) {
  const [theme, setTheme] = useLocalStorageState("dark-theme", "theme");

  function changeTheme() {
    setTheme((theme) =>
      theme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  }

  useEffect(() => {
    const element = document.body;
    let styles = element.classList.contains("dark-theme");
    if (styles) {
      element.classList.add("light-theme");
      element.classList.remove("dark-theme");
    } else {
      element.classList.add("dark-theme");
      element.classList.remove("light-theme");
    }
  }, [theme]);

  return (
    <AppsContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppsContext.Provider>
  );
}

AppContext.propTypes = {
  children: propType.node,
};

export { AppContext, AppsContext };
