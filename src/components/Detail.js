import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";
import Button from "./Button";
import Margin from "./Margin";
import { useVideoDetail } from "../hook/useDetail";

export const Detail = ({ language, runtime, posterImg, overview, movieId }) => {
  const videoDetail = useVideoDetail(movieId);
  const movieLink = () => {
    // 특정 링크로 이동
    Linking.openURL("https://www.youtube.com/watch?v=" + videoDetail);
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.GRAY,
        borderRadius: 5,
        padding: SPACES.SPACE_4,
        // flexDirection: "row",
        width: "100%",
      }}
    >
      {/* img and explanation area */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: SPACES.SPACE_6,
        }}
      >
        <Image
          source={{ uri: "https://image.tmdb.org/t/p/w500" + posterImg }}
          style={{
            width: 124,
            height: 150,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        />
        <View
          style={{
            marginLeft: SPACES.SPACE_4,
            width: "52%",
          }}
        >
          {videoDetail && (
            <>
              <Button
                title={"Watch trailer"}
                size={"Lg"}
                color={"White"}
                icon={"Play"}
                strokeWidth={2}
                onPress={movieLink}
              />
              <Margin height={SPACES.SPACE_2} />
            </>
          )}
          <Button
            title={"Add Calendar"}
            icon={"CalendarAdd"}
            size={"Lg"}
            color={"Black"}
            strokeWidth={2}
          />
          <Margin height={SPACES.SPACE_2} />
          <Button
            title={"Add Reminder"}
            icon={"NotificationBing"}
            size={"Lg"}
            color={"Black"}
            strokeWidth={2}
          />
        </View>
      </View>
      {/* contents text area */}
      <>
        <View style={{ flexDirection: "row", marginBottom: SPACES.SPACE_2_5 }}>
          <View style={{ marginRight: SPACES.SPACE_6 }}>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.SMALL * 1.25,
                marginBottom: SPACES.SPACE_1,
              }}
            >
              Runtime
            </Text>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.LIGHT,
                fontSize: FONT_SIZES.SMALL * 1.25,
              }}
            >
              {runtime}min
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.SMALL * 1.25,
                marginBottom: SPACES.SPACE_1,
              }}
            >
              Language
            </Text>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.REGULAR,
                fontSize: FONT_SIZES.SMALL * 1.25,
              }}
            >
              {language}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: COLORS.WHITE,
            fontFamily: FONTS.REGULAR,
            fontSize: FONT_SIZES.SMALL * 1.25,
          }}
        >
          {overview}
        </Text>
      </>
    </View>
  );
};

export default Detail;
