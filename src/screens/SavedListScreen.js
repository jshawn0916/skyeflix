import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "../constants";
import List from "../components/List";
import {
  getFavoriteMovies,
  removeFavoriteMovie,
  clearAllFavorites,
} from "../utils/storage";

const SavedListScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await getFavoriteMovies();
      setFavorites(storedFavorites);
    };
    loadFavorites();
  }, []);

  const deleteFavorite = async (movieId) => {
    await removeFavoriteMovie(movieId); // 저장된 목록에서 삭제
    const updatedFavorites = favorites.filter(
      (movie) => movie.movieId !== movieId
    ); // 상태 업데이트
    setFavorites(updatedFavorites);
  };

  const allClearFavorites = async () => {
    await clearAllFavorites();
    setFavorites([]);
  };

  const SeparatorComponent = () => (
    <View
      style={{
        height: SPACES.SPACE_5, // 각 항목 사이의 공간 크기 조절
        backgroundColor: "transparent", // 구분선의 색상
      }}
    />
  );

  const renderList = ({ item }) => (
    <List
      type={"favorite"}
      releaseDate={item.releaseDate}
      title={item.title}
      movieId={item.movieId}
      posterImg={item.posterImg}
      onDelete={() => deleteFavorite(item.movieId)}
      navigation={navigation}
    />
  );

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
          My Movie List
        </Text>
        <TouchableOpacity activeOpacity={1}>
          <Text
            onPress={allClearFavorites}
            style={{
              fontFamily: FONTS.MEDIUM,
              color: COLORS.GRAY_LIGHT,
              fontSize: FONT_SIZES.SMALL * 1.25,
              textDecorationLine: "underline",
            }}
          >
            All Clear
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={favorites}
        renderItem={renderList}
        ItemSeparatorComponent={SeparatorComponent}
        keyExtractor={(item) => item.movieId.toString()}
      />
    </View>
  );
};

export default SavedListScreen;
