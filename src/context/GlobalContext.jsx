import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useAppContext = () => useContext(MyContext);

export { ContextProvider, useAppContext };
