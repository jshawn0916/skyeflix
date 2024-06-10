import React from "react";
import { Button, Text, View } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";
import List from "../components/List";
const NotificationScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BLACK,
        paddingHorizontal: SPACES.SPACE_6,
        paddingBottom: SPACES.SPACE_5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginTop: SPACES.SPACE_5,
          marginBottom: SPACES.SPACE_8,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.MEDIUM,
            color: COLORS.WHITE,
            fontSize: FONT_SIZES.LARGE * 1.25,
          }}
        >
          Notification List
        </Text>
        <Text
          style={{
            fontFamily: FONTS.MEDIUM,
            color: COLORS.GRAY_LIGHT,
            fontSize: FONT_SIZES.SMALL * 1.25,
            textDecorationLine: "underline",
          }}
        >
          All Clear
        </Text>
      </View>
      <List type={"notification"} />
    </View>
  );
};

export default NotificationScreen;
