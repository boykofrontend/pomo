import React, { FC, ReactNode } from "react";
import PlayIcon from "./icons/play";
import DotsIcon from "./icons/dots";
import PauseIcon from "./icons/pause";
import FlashIcon from "./icons/flash";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  iconType: string;
  size: "small" | "medium";
}

const Button: FC<ButtonProps> = ({
  type = "button",
  className = "",
  size = "small",
  disabled,
  onClick,
  iconType,
}) => {
  const getIcon = (): ReactNode => {
    switch (iconType) {
      case "play":
        return <PlayIcon />;
      case "dots":
        return <DotsIcon />;
      case "pause":
        return <PauseIcon />;
      case "flash":
        return <FlashIcon />;
      default:
        return null;
    }
  };

  return (
    <button
      className={`custom-btn ${className} ${size}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {getIcon()}
    </button>
  );
};

export default Button;
