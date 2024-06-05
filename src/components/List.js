import React from "react";
import { View, Text } from "react-native";
import IconButton from "./IconButton";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";

export const List = ({}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY,
        borderRadius: 5,
        paddingVertical: SPACES.SPACE_4,
        paddingHorizontal: SPACES.SPACE_4,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <View
          style={{
            width: 64,
            height: 82,
            backgroundColor: COLORS.GRAY_LIGHT,
            borderRadius: 5,
            marginRight: SPACES.SPACE_4,
          }}
        /> */}
        <View>
          <Text
            style={{
              color: COLORS.WHITE,
              fontFamily: FONTS.MEDIUM,
              fontSize: FONT_SIZES.LARGE * 1.25,
              marginBottom: SPACES.SPACE_2,
            }}
          >
            The Garfield Movie
          </Text>
          <Text
            style={{
              color: COLORS.WHITE,
              fontFamily: FONTS.LIGHT,
              fontSize: FONT_SIZES.MEDIUM * 1.25,
            }}
          >
            2024-04-30
          </Text>
        </View>
      </View>
      {/* color, size, icon */}
      <IconButton
        color={COLORS.WHITE}
        size={"Lg"}
        icon={"Trash"}
        strokeWidth={1.5}
      />
    </View>
  );
};

export default List;
