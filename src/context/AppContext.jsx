import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  const value = {
    user,
    setUser,
    isSeller,
    setIsSeller,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
