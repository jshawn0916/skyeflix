import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { useMovieDetail, useGetCredit } from "../hook/useDetail";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";
import IconComponent from "../components/IconComponent";
import CastList from "../components/CastList";
import Detail from "../components/Detail";
import Margin from "../components/Margin";

const DetailScreen = ({ navigation, route }) => {
  const { movieId } = route.params;
  const movieDetail = useMovieDetail(movieId);
  const castDetail = useGetCredit(movieId);
  const crewDetail = useGetCredit(movieId);

  const genreText = movieDetail.genre
    ? movieDetail.genre
        .slice(0, 2)
        .map((genre) => genre.name)
        .join(", ")
    : "";
  const renderCast = ({ item }) => (
    <CastList
      character={item.character}
      name={item.name}
      profileImg={item.profile}
    />
  );
  const renderCrew = ({ item }) => (
    <CastList character={item.job} name={item.name} profileImg={item.profile} />
  );
  const SeparatorComponent = () => (
    <View
      style={{
        width: SPACES.SPACE_5, // 각 항목 사이의 공간 크기 조절
        backgroundColor: "transparent", // 구분선의 색상
      }}
    />
  );

  return (
    <ScrollView style={{ flex: 1 }} bounces={false}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.BLACK,
          paddingHorizontal: SPACES.SPACE_6,
          paddingBottom: SPACES.SPACE_5,
        }}
      >
        {/* title area */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: SPACES.SPACE_5,
            marginBottom: SPACES.SPACE_8,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: FONTS.MEDIUM,
                color: COLORS.WHITE,
                fontSize: FONT_SIZES.LARGE * 1.25,
              }}
            >
              {movieDetail.title}
            </Text>
            <View style={{ flexDirection: "row", marginTop: SPACES.SPACE_2_5 }}>
              <Text
                style={{
                  color: COLORS.GRAY_LIGHT,
                  fontSize: FONT_SIZES.MEDIUM * 1.25,
                  fontWeight: FONTS.REGULAR,
                  marginRight: SPACES.SPACE_4,
                }}
              >
                {movieDetail.releaseDate}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: COLORS.GRAY_LIGHT,
                    fontSize: FONT_SIZES.MEDIUM * 1.25,
                    fontWeight: FONTS.REGULAR,
                  }}
                >
                  {genreText}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconComponent
              color={COLORS.WHITE}
              icon={"Star"}
              iconSize={24}
              strokeWidth={2.5}
            />
          </View>
        </View>
        {/* movie context area */}
        <Detail
          language={movieDetail.language}
          runtime={movieDetail.runtime}
          posterImg={movieDetail.uri}
          overview={movieDetail.overview}
          movieId={movieId}
        />
        {/* cast area */}
        {castDetail.castDetail.length > 0 && (
          <View style={{ marginTop: SPACES.SPACE_8 }}>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.LARGE * 1.25,
                marginBottom: SPACES.SPACE_4,
              }}
            >
              Cast
            </Text>
            <FlatList
              data={castDetail.castDetail}
              renderItem={renderCast}
              keyExtractor={(_, index) => String(index)}
              horizontal // 가로 스크롤 활성화
              showsHorizontalScrollIndicator={false} // 가로 스크롤바 제거
              ItemSeparatorComponent={SeparatorComponent}
            />
          </View>
        )}
        {/* crew area */}
        {crewDetail.crewDetail.length > 0 && (
          <View style={{ marginTop: SPACES.SPACE_8 }}>
            <Text
              style={{
                color: COLORS.WHITE,
                fontFamily: FONTS.MEDIUM,
                fontSize: FONT_SIZES.LARGE * 1.25,
                marginBottom: SPACES.SPACE_4,
              }}
            >
              Crew
            </Text>
            <FlatList
              data={crewDetail.crewDetail}
              renderItem={renderCrew}
              keyExtractor={(_, index) => String(index)}
              horizontal // 가로 스크롤 활성화
              showsHorizontalScrollIndicator={false} // 가로 스크롤바 제거
              ItemSeparatorComponent={SeparatorComponent}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
export default DetailScreen;
