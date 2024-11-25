import { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  // buat useState darkmode dengan nilai awal false
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;


// value isDarkMode dan setIsDarkMode itu yang akan dikirim secara global nnati bisa diakses dihalaman apapun.
// 