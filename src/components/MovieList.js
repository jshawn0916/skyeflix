import React from "react";
import { Image, Text, View } from "react-native";
import Button from "./Button";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";

export const MovieList = ({}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY,
        borderRadius: 5,
        paddingVertical: SPACES.SPACE_4,
        paddingHorizontal: SPACES.SPACE_4,
        flexDirection: "row",
        width: "100%",
      }}
    >
      <View
        style={{
          width: 92,
          height: 117,
          backgroundColor: COLORS.GRAY_LIGHT,
          borderRadius: 5,
        }}
      />
      <View style={{ marginLeft: SPACES.SPACE_8 }}>
        <Text
          style={{
            color: COLORS.WHITE,
            // fontFamily: FONTS.,
            fontSize: FONT_SIZES.LARGE * 1.25,
            marginBottom: SPACES.SPACE_1_5,
          }}
        >
          The Garfield Movie
        </Text>
        <Text
          style={{
            color: COLORS.WHITE,
            // fontFamily: FONTS.MAIN.LIGHT,
            fontSize: FONT_SIZES.MEDIUM * 1.25,
            marginBottom: SPACES.SPACE_8,
          }}
        >
          2024-04-30
        </Text>
        <Button title={"More"} size={"Sm"} color={"White"} strokeWidth={2} />
      </View>
    </View>
  );
};

export default MovieList;
