import { createContext, useState } from "react";

export type AuthProp = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthProp | null;
  setUser: React.Dispatch<React.SetStateAction<AuthProp | null>>;
};

export type ChildrenProp = {
  children: React.ReactNode;
};
export const userContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: ChildrenProp) => {
  const [user, setUser] = useState<AuthProp | null>(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
