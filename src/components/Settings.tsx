import { FC, useContext, useState } from "react";

import CrossIcon from "./icons/cross";
import Switcher from "./Switcher";
import Counter from "./Counter";

import { IAppContext } from "../types/types";
import { SettingsTitles } from "../utils/constants";
import { AppContext } from "../context/appContext";

interface SettingsProps {
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
}

const Settings: FC<SettingsProps> = ({ showSettings, setShowSettings }) => {
  const appContext = useContext(AppContext);
  const [settingsState, setSettingsState] = useState<IAppContext>(appContext);

  const handleSettingsChange = (
    type: string,
    value: number | boolean
  ): void => {
    setSettingsState({ ...settingsState, [type]: value });

    if (type === "darkMode" || type === "showNotification") {
      appContext.updateAppContext({ ...settingsState, [type]: value });
    }
  };

  const handleCloseSettings = (): void => {
    appContext.updateAppContext(settingsState);
    setShowSettings(false);
  };

  if (!showSettings) {
    return null;
  }

  return (
    <>
      <div className={`settings ${appContext.currentNotification}`}>
        <div className="settings-head">
          <h1 className="settings-head-title">Settings</h1>
          <button
            onClick={handleCloseSettings}
            className="settings-head-button"
          >
            <CrossIcon fill={"#471515"} />
          </button>
        </div>
        <Switcher
          title={SettingsTitles.MODE}
          handleSettingsChange={handleSettingsChange}
          type="darkMode"
          defaultValue={appContext.darkMode}
        />
        <Counter
          title={SettingsTitles.FOCUS}
          defaultValue={appContext.focus}
          handleSettingsChange={handleSettingsChange}
          type="focus"
        />
        {/* add initial calue from context to each counter */}
        <Counter
          title={SettingsTitles.SHORT_BREAK}
          defaultValue={appContext.shortBreak}
          handleSettingsChange={handleSettingsChange}
          type="shortBreak"
        />
        <Counter
          title={SettingsTitles.LONG_BREAK}
          defaultValue={appContext.longBreak}
          handleSettingsChange={handleSettingsChange}
          type="longBreak"
        />
        <Switcher
          title={SettingsTitles.NOTIFICATION}
          handleSettingsChange={handleSettingsChange}
          type="showNotification"
          defaultValue={appContext.showNotification}
        />
      </div>
      <div
        onClick={handleCloseSettings}
        className="settings-backdrop"
        role="presentation"
      />
    </>
  );
};

export default Settings;
