import { createContext, useState, useContext } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : {};
  });

  const updateUser = (data) => {
  const updated = { ...userData, ...data };
  localStorage.setItem("userData", JSON.stringify(updated));
  setUserData(updated); 
};

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
