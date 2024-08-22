"use client";
import {
  ReactNode,
  useContext,
  useState,
  createContext,
  SetStateAction,
} from "react";

interface User {
  usename: string;
  password: string;
}
const UserContext = createContext({
  user: null as User | null,
  setUser: (value: SetStateAction<User | null>) => {},
});

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default useUser;
export { UserProvider };
