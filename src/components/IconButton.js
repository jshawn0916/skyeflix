import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../commonStyles";
import AddIcon from "./AddIcon";

export const IconButton = ({ icon, size, color }) => {
  // 아이콘 컴포넌트 동적으로 가져오기
  let IconComponent;
  switch (icon) {
    case "Add":
      IconComponent = AddIcon;
      break;
    case "Other":
      IconComponent = OtherIcon;
      break;
    // 필요한 경우 다른 아이콘 컴포넌트를 추가합니다.
    default:
      IconComponent = AddIcon; // 기본 아이콘 컴포넌트를 지정합니다.
  }

  const IconStyle = StyleSheet.flatten([
    commonStyles[`Icon${size}`],
    // commonStyles[`Button${color}`],
  ]);
  //   const image = Icons[icon] || Icons.default;
  return (
    <TouchableOpacity style={IconStyle}>
      <IconComponent strokeWidth={2} stroke={color} />
    </TouchableOpacity>
  );
};
export default IconButton;
