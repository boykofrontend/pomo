import { FC, useState } from "react";

interface Switcher {
  title: string;
  handleSettingsChange: (type: string, value: boolean) => void;
  type: string;
  defaultValue: boolean;
}

const Switcher: FC<Switcher> = ({
  title,
  handleSettingsChange,
  type,
  defaultValue,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);
  const uniqID = title.replaceAll(" ", "-");

  const handleClick = (): void => {
    setIsChecked(!isChecked);
    handleSettingsChange(type, !isChecked);
  };

  return (
    <div className="switcher">
      <p className="switcher-title">{title}</p>
      <input type="checkbox" id={uniqID} checked={isChecked} readOnly />
      <label htmlFor={uniqID} onClick={handleClick} role="presentation" />
    </div>
  );
};

export default Switcher;
