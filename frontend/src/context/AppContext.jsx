import { createContext, useState } from "react";
import { doctors } from "../assets/assets";
import { useEffect } from "react";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "INR";
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", "default-token"); // Set default token
      setToken("default-token"); // Set token in context state
    }
  }, []);

  const value = {
    doctors,
    currencySymbol,
    token,
    setToken,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
