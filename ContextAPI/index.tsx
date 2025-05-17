"use client";
import { createContext, ReactNode, useState } from "react";

export interface UserContextType {
  name: string;
  setname: (name: string) => void;
  gmail: string;
  setgmail: (gmail: string) => void;
  password: string;
  setpassword: (password: string) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const Context = createContext<UserContextType | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [name, setname] = useState<string>("");
  const [gmail, setgmail] = useState<string>("");
  const [password, setpassword] = useState<string>("")

  return (
    <Context.Provider value={{ name, setname, gmail, setgmail, password, setpassword }}>
      {children}
    </Context.Provider>
  );
};
