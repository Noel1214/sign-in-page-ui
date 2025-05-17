"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setname] = useState("");
  const [gmail, setgmail] = useState("");
  const [password, setpassword] = useState("")

  return (
    <Context.Provider value={{ name, setname, gmail, setgmail, password, setpassword }}>
      {children}
    </Context.Provider>
  );
};
