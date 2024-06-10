import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";
import MovieList from "../components/MovieList";
import IconComponent from "../components/IconComponent";
import useCountry from "../hook/useCountry";
import useMovie from "../hook/useMovie";

const HomeScreen = ({ navigation }) => {
  const { countryCode, city } = useCountry();
  const movies = useMovie(countryCode);
  //   console.log(movies);

  const sortedMovies = movies.sort((a, b) => {
    // release_date를 Date 객체로 변환
    const dateA = new Date(a.release_date);
    const dateB = new Date(b.release_date);

    // 현재 날짜와의 차이 계산
    const diffA = Math.abs(dateA - new Date());
    const diffB = Math.abs(dateB - new Date());

    // 차이가 작은 순으로 정렬
    return diffA - diffB;
  });

  const renderItem = ({ item }) => (
    <View>
      <MovieList
        movieTitle={item.title}
        releaseDate={item.release_date}
        posterImg={item.poster_path}
        navigation={navigation} // pass navigation to MovieList
        movieId={item.id}
        countryCode={countryCode}
      />
    </View>
  );

  const SeparatorComponent = () => (
    <View
      style={{
        height: SPACES.SPACE_5, // 각 항목 사이의 공간 크기 조절
        backgroundColor: "transparent", // 구분선의 색상
      }}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BLACK,
        paddingHorizontal: SPACES.SPACE_6,
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
          Upcoming Movies {"(" + movies.length + ")"}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/*  icon, color, iconSize, strokeWidth  */}
          <IconComponent
            color={COLORS.GRAY_LIGHT}
            icon={"Location"}
            iconSize={16}
            strokeWidth={2.5}
            fill={"none"}
          />
          <Text
            style={{
              color: COLORS.GRAY_LIGHT,
              marginLeft: SPACES.SPACE_1,
              fontFamily: FONTS.MEDIUM,
              fontSize: FONT_SIZES.SMALL * 1.25,
            }}
          >
            {city}, {countryCode}
          </Text>
        </View>
      </View>
      <FlatList
        data={sortedMovies} // 데이터 배열 설정
        renderItem={renderItem} // renderItem 함수 설정
        keyExtractor={(item) => item.id.toString()} // 각 아이템의 고유 키 설정
        ItemSeparatorComponent={SeparatorComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
