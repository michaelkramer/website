import React, { useState } from "react";
import { IconTheme } from "./Icons";
const context = React.createContext<any>(null);

const GlobalProvider = ({ children }: any) => {
  const [iconTheme, setIconTheme] = useState<IconTheme>(IconTheme.antd);

  return (
    <context.Provider value={{ iconTheme, setIconTheme }}>
      {children}
    </context.Provider>
  );
};
GlobalProvider.context = context;
export default GlobalProvider;
