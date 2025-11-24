// context/DataContext.tsx
import { createContext, useContext } from 'react';
import { useData, type UseDataType } from './use-data';

export const DataContext = createContext<UseDataType | null>(null);

export const useDataContext = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useDataContext must be used within a DataProvider');
  return ctx;
};

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const data = useData();
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};