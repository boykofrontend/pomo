import React, { FC, ReactNode } from "react";
import { AppVariant } from "../utils/constants";
import BrainIcon from "./icons/brain";
import CoffeeIcon from "./icons/coffee";
import { NotificationTypes } from "../types/types";

interface NotificationProps {
  appState: NotificationTypes;
}

const Notification: FC<NotificationProps> = ({ appState }) => {
  const getIcon = (): ReactNode => {
    switch (appState) {
      case "focus":
        return <BrainIcon />;
      default:
        return <CoffeeIcon />;
    }
  };

  return (
    <div className={`notification ${appState}`}>
      {getIcon()}
      <p className="notification-description">{AppVariant[appState]}</p>
    </div>
  );
};

export default Notification;
