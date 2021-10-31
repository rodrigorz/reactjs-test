import { createContext } from 'react';

const AppContext = createContext({
  sidebarShow: true,
  setSidebarShow(value: boolean): void {},
});

export default AppContext;
