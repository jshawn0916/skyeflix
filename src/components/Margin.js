import React from "react";
import { View } from "react-native";

export const Margin = ({ height }) => {
  return (
    <View
      style={{
        height: height, // 각 항목 사이의 공간 크기 조절
        backgroundColor: "transparent", // 구분선의 색상
      }}
    />
  );
};
export default Margin;
