import { FC, useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { ButtonIconTypes } from "../utils/constants";
import { getFormattedTime, getParsedTime } from "../utils/helpers";
import { AppContext } from "../context/appContext";

interface TimerProps {
  setShowSettings: (showSettings: boolean) => void;
  defaultTimer: number;
}

const Timer: FC<TimerProps> = ({ setShowSettings, defaultTimer }) => {
  const appContext = useContext(AppContext);
  const [timer, setTimer] = useState<number>(defaultTimer);
  const [pause, setPause] = useState<boolean>(true);
  const [minutes, seconds] = getParsedTime(timer);

  const handleSettings = (): void => {
    setShowSettings(true);
  };

  const intervalRef = useRef<number>();

  const decreaseNum = (): void => setTimer((prevTime) => prevTime - 1);
  const handleNextStep = (): void => appContext.updateNotification();

  useEffect(() => {
    if (!timer) {
      clearInterval(intervalRef.current);
      setPause(!pause);
      handleNextStep();
    }
  }, [timer]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePauseClick = (): void => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = window.setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    <div className={`timer ${appContext.currentNotification}`}>
      <div className={`timer-content ${!pause ? "active" : ""}`}>
        <div className="timer-content-time">
          {getFormattedTime(minutes) || "00"}
        </div>
        <div className="timer-content-time">
          {getFormattedTime(seconds) || "00"}
        </div>
      </div>
      <div className="timer-buttons-container">
        <Button
          size="small"
          iconType={ButtonIconTypes.DOTS}
          onClick={handleSettings}
        />
        {pause ? (
          <Button
            size="medium"
            iconType={ButtonIconTypes.PLAY}
            onClick={handlePauseClick}
          />
        ) : (
          <Button
            size="medium"
            iconType={ButtonIconTypes.PAUSE}
            onClick={handlePauseClick}
          />
        )}

        <Button
          size="small"
          iconType={ButtonIconTypes.FLASH}
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};

export default Timer;
