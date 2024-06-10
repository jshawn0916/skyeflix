import React from "react";
import AddIcon from "./Icons/AddIcon";
import TrashIcon from "./Icons/TrashIcon";
import { View } from "react-native";
import ArrowLeftIcon from "./Icons/ArrowLeftIcon";
import DirectNomalIcon from "./Icons/DirectNormalIcon";
import NotificationIcon from "./Icons/NotificationIcon";
import LocationIcon from "./Icons/LocationIcon";
import StarIcon from "./Icons/StarIcon";
import CalendarAddIcon from "./Icons/CalendarAddIcon";
import PlayIcon from "./Icons/PlayIcon";
import NotificationBingIcon from "./Icons/NotificationBingIcon";

export const IconComponent = ({ icon, color, iconSize, strokeWidth, fill }) => {
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
    case "Location":
      Icon = LocationIcon;
      break;
    case "Star":
      Icon = StarIcon;
      break;
    case "CalendarAdd":
      Icon = CalendarAddIcon;
      break;
    case "Play":
      Icon = PlayIcon;
      break;
    case "NotificationBing":
      Icon = NotificationBingIcon;
      break;
    // 필요한 경우 다른 아이콘 컴포넌트를 추가합니다.
    default:
      Icon = AddIcon; // 기본 아이콘 컴포넌트를 지정합니다.
  }
  return (
    <View>
      <Icon
        strokeWidth={strokeWidth}
        color={color}
        size={iconSize}
        fill={fill}
      />
    </View>
  );
};

export default IconComponent;
