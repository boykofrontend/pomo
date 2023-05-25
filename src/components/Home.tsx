import { FC, useContext, useState } from "react";
import Notification from "./Notification";
import { AppContext } from "../context/appContext";
import Timer from "./Timer";
import Settings from "./Settings";

const Home: FC = () => {
  const appContext = useContext(AppContext);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <div
      className={`home ${appContext.darkMode ? "dark-mode" : ""} ${
        appContext.currentNotification
      }`}
    >
      <Settings
        key={appContext.currentNotification}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      <div className="home-content">
        {appContext.showNotification && (
          <Notification appState={appContext.currentNotification} />
        )}
        <Timer
          key={appContext[appContext.currentNotification]}
          setShowSettings={setShowSettings}
          defaultTimer={appContext[appContext.currentNotification]}
        />
      </div>
    </div>
  );
};

export default Home;
