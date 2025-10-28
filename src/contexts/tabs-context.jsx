import {createContext, useContext, useState, useCallback} from 'react';

const TabsContext = createContext(null);

export const TabsProvider = ({children}) => {
  const [tabs, setTabs] = useState([]);

  const addTab = useCallback(newTab => {
    setTabs(prev => {
      const exists = prev.some(t => t.id === newTab.id);
      return exists ? prev : [...prev, newTab];
    });
  }, []);

  const removeTab = useCallback(tabId => {
    setTabs(prev => prev.filter(t => t.id !== tabId));
  }, []);

  return <TabsContext.Provider value={{tabs, addTab, removeTab}}>{children}</TabsContext.Provider>;
};

export const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('useTabs deve ser usado dentro de <TabsProvider>');
  return ctx;
};
