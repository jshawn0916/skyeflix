import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { commonStyles } from "../commonStyles";

export const Button = ({ title, size, color, onPress }) => {
  const buttonStyle = StyleSheet.flatten([
    commonStyles[`Button${size}`],
    commonStyles[`Button${color}`],
  ]);
  const textStyle = StyleSheet.flatten([
    commonStyles[`Button${size}Text`],
    commonStyles[`Button${color}Text`],
  ]);
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
