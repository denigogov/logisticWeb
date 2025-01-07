import { CookieOptions } from "../hooks/DataContext.types";

// Default options for cookies
const DEFAULT_COOKIE_OPTIONS: CookieOptions = {
  path: "/",
  secure: window.location.protocol === "https:",
  sameSite: "Lax",
};

/**
 * Sets a cookie.
 * @param name string - The name of the cookie.
 * @param value string - The value of the cookie.
 * @param days number - Optional, number of days until expiration.
 * @param options object - Optional, extra options (path, secure, sameSite).
 */
export const setCookie = (
  name: string,
  value: any, // Accepts objects
  days: number = 30,
  options: CookieOptions = DEFAULT_COOKIE_OPTIONS
) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const cookieValue = typeof value === "object" ? JSON.stringify(value) : value; // Handle objects

  let cookieString = `${name}=${encodeURIComponent(
    cookieValue
  )}; expires=${date.toUTCString()};`;
  cookieString += ` path=${options.path || DEFAULT_COOKIE_OPTIONS.path};`;
  cookieString += ` SameSite=${
    options.sameSite || DEFAULT_COOKIE_OPTIONS.sameSite
  };`;
  if (options.secure) cookieString += " Secure;";

  document.cookie = cookieString;
};

/**
 * Gets a cookie value by name.
 * @param name string - The name of the cookie to retrieve.
 * @returns string | null - The cookie value or null if not found.
 */
export const getCookie = (name: string): any => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      const decodedValue = decodeURIComponent(value);
      try {
        return JSON.parse(decodedValue); // Attempt to parse JSON
      } catch {
        return decodedValue; // Return as string if not JSON
      }
    }
  }
  return null;
};

/**
 * Removes a cookie by name.
 * @param name string - The name of the cookie to remove.
 * @param options object - Optional, options to match (path, secure, sameSite).
 */
export const removeCookie = (
  name: string,
  options = DEFAULT_COOKIE_OPTIONS
) => {
  setCookie(name, "", -1, options);
};
