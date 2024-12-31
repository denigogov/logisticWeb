import { useContext } from "react";
import { DataContextType } from "./DataContext.types";
import { DataContext } from "./DataContext";

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within an DataProvider");
  }
  return context;
};
