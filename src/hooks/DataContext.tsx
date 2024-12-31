import { createContext, ReactNode } from "react";
import { DataContextType } from "./DataContext.types";
import { getLocalStorageItem, saveToLocalStorage } from "../utils/localstorage";

interface DataContextProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  /**
   *
   * @returns remove the # from url !
   */
  const removeHashfromUrl = () => {
    return window.history.replaceState(
      "",
      document.title,
      window.location.pathname
    );
  };

  return (
    <DataContext
      value={{
        getLocalStorageItem,
        saveToLocalStorage,
        removeHashfromUrl,
      }}
    >
      {children}
    </DataContext>
  );
};
