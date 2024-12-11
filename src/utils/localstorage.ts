/**
 *
 * @param key name for the value
 * @param value value
 */
export const saveToLocalStorage = (key: string, value: string): void => {
  try {
    const stringValue = JSON.stringify(value);

    localStorage.setItem(key, stringValue);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

/**
 * Items from local storage !
 * @param key item under which key is saved  !
 * @returns object
 */
export const getLocalStorageItem = (key: string): string | null => {
  try {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return null;
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return null;
  }
};
