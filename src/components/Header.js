import React from "react";
import { Text, View, Image } from "react-native";
import IconButton from "./IconButton";
import { COLORS, FONTS, SPACES } from "../constants";

export const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: 16,
      }}
    >
      <View style={{}}>
        <IconButton
          color={COLORS.WHITE}
          iconSize={"Lg"}
          icon={"ArrowLeft"}
          strokeWidth={2}
        />
      </View>
      <View style={{ width: 125, marginLeft: SPACES.SPACE_8 }}>
        <Image
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "contain",
          }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginRight: SPACES.SPACE_4 }}>
          <IconButton
            color={COLORS.WHITE}
            iconSize={"Lg"}
            icon={"DirectNomal"}
            strokeWidth={1.5}
          />
        </View>
        <View style={{}}>
          <IconButton
            color={COLORS.WHITE}
            iconSize={"Lg"}
            icon={"Notification"}
            strokeWidth={1.5}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
