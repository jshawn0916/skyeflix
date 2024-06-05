import React from "react";
import AddIcon from "./AddIcon";
import TrashIcon from "./TrashIcon";
import { View } from "react-native";
import ArrowLeftIcon from "./ArrowLeftIcon";
import DirectNomalIcon from "./DirectNormalIcon";
import NotificationIcon from "./NotificationIcon";

export const IconComponent = ({ icon, color, iconSize, strokeWidth }) => {
  let Icon;
  switch (icon) {
    case "Add":
      Icon = AddIcon;
      break;
    case "Trash":
      Icon = TrashIcon;
      break;
    case "ArrowLeft":
      Icon = ArrowLeftIcon;
      break;
    case "DirectNomal":
      Icon = DirectNomalIcon;
      break;
    case "Notification":
      Icon = NotificationIcon;
      break;
    // 필요한 경우 다른 아이콘 컴포넌트를 추가합니다.
    default:
      Icon = AddIcon; // 기본 아이콘 컴포넌트를 지정합니다.
  }
  return (
    <View>
      <Icon strokeWidth={strokeWidth} color={color} size={iconSize} />
    </View>
  );
};

export default IconComponent;
