import { createContext } from 'react';

interface IAppContext {
  sidebarShow: boolean;
  setSidebarShow(value: boolean): void;
}

const AppContext = createContext<IAppContext>({
  sidebarShow: true,
  setSidebarShow(value: boolean): void {},
});

export default AppContext;
