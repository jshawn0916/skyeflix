import { StyleSheet, TouchableOpacity } from "react-native";
import { commonStyles } from "../commonStyles";
import { IconComponent } from "./IconComponent";

export const IconButton = ({ color, size, icon, strokeWidth, onPress }) => {
  const IconStyle = StyleSheet.flatten([commonStyles[`Icon${size}`]]);
  let iconSize = size === "Lg" ? 28 : "Md" ? 24 : 16;
  return (
    <TouchableOpacity style={IconStyle} onPress={onPress}>
      <IconComponent
        color={color}
        icon={icon}
        iconSize={iconSize}
        strokeWidth={strokeWidth}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
