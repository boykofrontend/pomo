import React, { FC, createContext, useState } from "react";
import { IAppContext } from "../types/types";

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const defaultAppContext: IAppContext = {
  darkMode: false,
  focus: 1500,
  shortBreak: 300,
  longBreak: 900,
  showNotification: true,
  updateAppContext: () => {},
  updateContextField: () => {},
  updateNotification: () => {},
  currentNotification: "focus",
  notifications: ["shortBreak", "focus", "longBreak", "focus"],
};

export const AppContext = createContext<IAppContext>(defaultAppContext);

const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [appContext, setAppContext] = useState<IAppContext>(defaultAppContext);

  const updateAppContext = (newContext: IAppContext): void => {
    setAppContext(newContext);
  };

  const updateContextField = (type: string, value: string | boolean): void => {
    setAppContext({ ...appContext, [type]: value });
  };

  const updateNotification = (): void => {
    const currentNotification = appContext.notifications.shift() || "focus";
    const newNotifications = [...appContext.notifications, currentNotification];

    setAppContext({
      ...appContext,
      currentNotification,
      notifications: newNotifications,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...appContext,
        updateAppContext,
        updateContextField,
        updateNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
