import React from "react";
import Svg, { Path } from "react-native-svg";
export const NotificationBingIcon = (props) => (
  <Svg
    width={props.size}
    height={props.size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M16 8.58667V13.0267"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M16.0267 2.66663C11.12 2.66663 7.14665 6.63996 7.14665 11.5466V14.3466C7.14665 15.2533 6.77332 16.6133 6.30665 17.3866L4.61332 20.2133C3.57332 21.96 4.29332 23.9066 6.21332 24.5466C12.5867 26.6666 19.48 26.6666 25.8533 24.5466C27.6533 23.9466 28.4267 21.84 27.4533 20.2133L25.76 17.3866C25.2933 16.6133 24.92 15.24 24.92 14.3466V11.5466C24.9067 6.66663 20.9067 2.66663 16.0267 2.66663Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <Path
      d="M20.4401 25.0934C20.4401 27.5334 18.4401 29.5334 16.0001 29.5334C14.7867 29.5334 13.6667 29.0267 12.8667 28.2267C12.0667 27.4267 11.5601 26.3067 11.5601 25.0934"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      stroke-miterlimit="10"
    />
  </Svg>
);
export default NotificationBingIcon;
