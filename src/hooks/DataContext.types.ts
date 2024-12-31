export type DataContextType = {
  getLocalStorageItem: (key: string) => string | null;
  saveToLocalStorage: (key: string, value: string) => void;
  removeHashfromUrl?: any;
};
