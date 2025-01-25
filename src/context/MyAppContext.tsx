import { createContext, ReactNode, useContext, useState } from "react";

type MyAppContextProviderProps = {
  children: ReactNode;
};

type MyAppContext = {
  showHide: () => void;
  visible: boolean;
};

const MyAppContextContext = createContext({} as MyAppContext);

export function UseMyAppContext() {
  return useContext(MyAppContextContext);
}

export function MyAppContextProvider({ children }: MyAppContextProviderProps) {
  const [visible, setVisible] = useState<boolean>(false);

  function showHide() {
    setVisible(!visible);
  }

  return (
    <MyAppContextContext.Provider
      value={{
        showHide,
        visible,
      }}
    >
      {children}
    </MyAppContextContext.Provider>
  );
}
