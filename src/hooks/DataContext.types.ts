// Define CookieOptions type
export type CookieOptions = {
  path?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
};

export type DataContextType = {
  getLocalStorageItem: (key: string) => string | null;
  saveToLocalStorage: (key: string, value: string) => void;
  removeHashfromUrl?: any;
  navigateToRoute: (key: string) => void;

  setCookie: (
    name: string,
    value: string,
    days?: number,
    options?: CookieOptions
  ) => void;
  getCookie: (name: string) => CookiePreferenceType | null;
  removeCookie: (name: string) => void;

  cookiePreference: CookiePreferenceType;
  setCookiePreference: (cookies: CookiePreferenceType) => void;
};
export type CookiePreferenceKeysType = "marketing" | "statistic" | "required";

export type CookiePreferenceType = Record<CookiePreferenceKeysType, boolean>;
