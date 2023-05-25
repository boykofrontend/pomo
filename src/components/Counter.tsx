import React, { FC, useState } from "react";
import TriangleIcon from "./icons/triangle";

interface CounterProps {
  title: string;
  defaultValue: number;
  type: string;
  handleSettingsChange: (type: string, value: number) => void;
}

const Counter: FC<CounterProps> = ({
  title,
  defaultValue,
  type,
  handleSettingsChange,
}) => {
  const [count, setCount] = useState<number>(defaultValue);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = parseInt(e.currentTarget.value, 10) || 0;
    setCount(value);
    handleSettingsChange(type, value);
  };

  const handleDecrement = (): void => {
    setCount(count - 1);
    handleSettingsChange(type, count - 1);
  };

  const handleIncrement = (): void => {
    setCount(count + 1);
    handleSettingsChange(type, count + 1);
  };

  return (
    <div className="counter">
      <p className="counter-title">{title}</p>
      <div className="counter-input-wrapper">
        <input
          className="counter-input"
          pattern="\d{1,5}"
          value={count}
          onChange={handleInputChange}
        />
        <div className="counter-buttons-container">
          <button className="counter-decrement" onClick={handleIncrement}>
            <TriangleIcon />
          </button>
          <button
            disabled={count === 0}
            className="counter-increment"
            onClick={handleDecrement}
          >
            <TriangleIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
