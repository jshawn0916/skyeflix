import React from "react";
import Svg, { Path } from "react-native-svg";
const AddIcon = (props) => (
  <Svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 16H24"
      stroke={props.stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M16 24V8"
      stroke={props.stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default AddIcon;
