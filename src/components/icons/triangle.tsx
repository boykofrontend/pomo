import { FC } from "react";
import { ISvg } from "../../types/types";

const TriangleIcon: FC<ISvg> = ({ fill = "#471515" }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 0L11.1962 7.5H0.803848L6 0Z" fill={fill} />
    </svg>
  );
};

export default TriangleIcon;
