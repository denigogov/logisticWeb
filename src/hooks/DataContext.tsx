import { createContext, ReactNode, useState } from "react";
import { CookiePreferenceType, DataContextType } from "./DataContext.types";
import { getLocalStorageItem, saveToLocalStorage } from "../utils/localstorage";
import { setCookie, removeCookie, getCookie } from "../utils/cookies";
import { useNavigate } from "react-router-dom";

interface DataContextProps {
  children: ReactNode;
}

export const DataContext = createContext<DataContextType | null>(null);

export const DataProvider: React.FC<DataContextProps> = ({ children }) => {
  const initialCookies: CookiePreferenceType = {
    required: false,
    marketing: false,
    statistic: true,
  };

  const currentCookies = getCookie("cookiePreferences");

  const [cookiePref, setCookiePref] = useState<CookiePreferenceType>(
    currentCookies?.required ? currentCookies : initialCookies
  );

  const setCookiePreference = (preferences: CookiePreferenceType) => {
    setCookiePref(preferences);
  };

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
        cookiePreference: cookiePref,
        setCookiePreference,
        getCookie,
        setCookie,
        removeCookie,
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
