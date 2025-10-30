import {createContext, useContext, useCallback} from 'react';

const PageTabsContext = createContext(null);

const PageTabsProvider = ({children, pageState, setPageState}) => {
  const tabs = pageState?.tabs || [];

  const addTab = useCallback(
    newTab => {
      newTab.dynamic = true;
      newTab.active = true;

      const prevTabs = pageState?.tabs || [];
      const updatedTabs = prevTabs.map(tab => ({...tab, active: false}));

      const exists = updatedTabs.some(t => t.id === newTab.id);
      let newTabs;
      if (exists) {
        newTabs = updatedTabs.map(t => (t.id === newTab.id ? {...t, active: true} : t));
      } else {
        newTabs = [...updatedTabs, {...newTab, dynamic: true, active: true}];
      }

      setPageState({...pageState, tabs: newTabs});
    },
    [pageState, setPageState],
  );

  const removeTab = useCallback(
    tabId => {
      const prevTabs = pageState?.tabs || [];
      const newTabs = prevTabs.filter(t => t.id !== tabId);
      setPageState({...pageState, tabs: newTabs});
    },
    [pageState, setPageState],
  );

  const selectTab = useCallback(
    tabId => {
      const prevTabs = pageState?.tabs || [];
      const exists = prevTabs.some(t => t.id === tabId);
      if (!exists) return;

      const newTabs = prevTabs.map(tab => ({
        ...tab,
        active: tab.id === tabId,
      }));

      setPageState({...pageState, tabs: newTabs});
    },
    [pageState, setPageState],
  );

  return <PageTabsContext.Provider value={{tabs, addTab, removeTab, selectTab}}>{children}</PageTabsContext.Provider>;
};

const usePageTabs = () => {
  const ctx = useContext(PageTabsContext);
  if (!ctx) throw new Error('useTabs deve ser usado dentro de <TabsProvider>');
  return ctx;
};

export {PageTabsProvider, usePageTabs};
