import { StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "./constants";

const baseButtonStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: SPACES.SPACE_4,
  borderRadius: 5,
};

const baseButtonTextStyle = {
  fontFamily: FONTS.MEDIUM,
  marginLeft: SPACES.SPACE_1_5,
};

export const commonStyles = StyleSheet.create({
  //Button style - Size
  ButtonLg: {
    ...baseButtonStyle,
    paddingVertical: SPACES.SPACE_2_5,
    marginBottom: 12, // test용
  },
  ButtonLgText: {
    ...baseButtonTextStyle,
    fontSize: FONT_SIZES.MEDIUM * 1.25,
  },
  ButtonSm: {
    ...baseButtonStyle,
    paddingVertical: SPACES.SPACE_2,
  },
  ButtonSmText: {
    ...baseButtonTextStyle,
    fontSize: FONT_SIZES.SMALL * 1.25,
  },
  //Button Style - Color
  ButtonWhite: {
    backgroundColor: COLORS.WHITE,
  },
  ButtonBlack: {
    backgroundColor: COLORS.GRAY_DARK,
  },
  ButtonWhiteText: {
    color: COLORS.BLACK,
  },
  ButtonBlackText: {
    color: COLORS.WHITE,
  },
  IconLg: {
    width: 24,
    height: 24,
  },
  IconMd: {
    width: 16,
    height: 16,
  },
  IconSm: {
    width: 10,
    height: 10,
  },
});
