export interface ISvg {
  width?: string;
  height?: string;
  fill?: string;
}

export type NotificationTypes = "focus" | "longBreak" | "shortBreak";

export interface IAppContext {
  darkMode: boolean;
  focus: number;
  shortBreak: number;
  longBreak: number;
  showNotification: boolean;
  updateAppContext: (context: IAppContext) => void;
  updateContextField: (type: string, value: string | boolean) => void;
  updateNotification: () => void;
  currentNotification: NotificationTypes;
  notifications: NotificationTypes[];
}
