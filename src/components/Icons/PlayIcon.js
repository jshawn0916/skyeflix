import React from "react";
import Svg, { Path } from "react-native-svg";
export const PlayIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M5.33337 16V11.2534C5.33337 5.36002 9.50671 2.94669 14.6134 5.89336L18.7334 8.26669L22.8534 10.64C27.96 13.5867 27.96 18.4134 22.8534 21.36L18.7334 23.7334L14.6134 26.1067C9.50671 29.0534 5.33337 26.64 5.33337 20.7467V16Z"
      fill={props.color}
      stroke="none"
      strokeWidth={props.strokeWidth}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default PlayIcon;
