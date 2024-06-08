import React from "react";
import Svg, { Path } from "react-native-svg";
export const StarIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.3067 4.68002L20.6533 9.37335C20.9733 10.0267 21.8267 10.6534 22.5467 10.7734L26.8 11.48C29.52 11.9334 30.16 13.9067 28.2 15.8534L24.8933 19.16C24.3333 19.72 24.0267 20.8 24.2 21.5734L25.1467 25.6667C25.8933 28.9067 24.1733 30.16 21.3067 28.4667L17.32 26.1067C16.6 25.68 15.4133 25.68 14.68 26.1067L10.6933 28.4667C7.84 30.16 6.10667 28.8934 6.85333 25.6667L7.8 21.5734C7.97333 20.8 7.66667 19.72 7.10667 19.16L3.8 15.8534C1.85333 13.9067 2.48 11.9334 5.2 11.48L9.45333 10.7734C10.16 10.6534 11.0133 10.0267 11.3333 9.37335L13.68 4.68002C14.96 2.13335 17.04 2.13335 18.3067 4.68002Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default StarIcon;
