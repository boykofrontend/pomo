import { FC } from "react";
import { ISvg } from "../../types/types";

const CrossIcon: FC<ISvg> = ({
  fill = "#471515",
  width = "12",
  height = "12",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4633 10.6615C11.5689 10.7682 11.6281 10.9122 11.6281 11.0623C11.6281
        11.2124 11.5689 11.3564 11.4633 11.4631C11.3558 11.567 11.212 11.6252 11.0625
        11.6252C10.9129 11.6252 10.7692 11.567 10.6617 11.4631L5.99999 6.79433L1.33827
        11.4631C1.23076 11.567 1.08705 11.6252 0.93749 11.6252C0.787932 11.6252 0.644225
        11.567 0.536709 11.4631C0.431082 11.3564 0.371826 11.2124 0.371826 11.0623C0.371826
        10.9122 0.431082 10.7682 0.536709 10.6615L5.20546 5.9998L0.536709 1.33808C0.447011
        1.22879 0.401172 1.09004 0.408108 0.94882C0.415043 0.807603 0.474258 0.674015 0.574234
        0.574039C0.674209 0.474063 0.807798 0.414848 0.949015 0.407913C1.09023 0.400977 1.22898
        0.446816 1.33827 0.536514L5.99999 5.20526L10.6617 0.536514C10.771 0.446816 10.9097
        0.400977 11.051 0.407913C11.1922 0.414848 11.3258 0.474063 11.4257 0.574039C11.5257
        0.674015 11.5849 0.807603 11.5919 0.94882C11.5988 1.09004 11.553 1.22879 11.4633
        1.33808L6.79452 5.9998L11.4633 10.6615Z"
        fill={fill}
      />
    </svg>
  );
};

export default CrossIcon;
