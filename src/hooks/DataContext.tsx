import { createContext, ReactNode } from "react";
import { DataContextType } from "./DataContext.types";
import { getLocalStorageItem, saveToLocalStorage } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";

interface DataContextProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const navigate = useNavigate();
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

  /**
   * Function to navigate to the wished route
   * @param route string
   * @returns
   */
  const navigateToRoute = (route: string) => navigate(route);

  return (
    <DataContext
      value={{
        getLocalStorageItem,
        saveToLocalStorage,
        removeHashfromUrl,
        navigateToRoute,
      }}
    >
      {children}
    </DataContext>
  );
};
