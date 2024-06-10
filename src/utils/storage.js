import AsyncStorage from "@react-native-async-storage/async-storage";

// store movie information to starage
export const storeFavoriteMovie = async (movie) => {
  try {
    const favorites = await getFavoriteMovies();
    const newFavorites = [...favorites, movie];
    await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    console.log("Stored favorites:", newFavorites);
  } catch (e) {
    console.error(e);
  }
};
// 영화 정보를 제거하는 함수
export const removeFavoriteMovie = async (movieId) => {
  try {
    const favorites = await getFavoriteMovies();
    const newFavorites = favorites.filter((movie) => movie.movieId !== movieId);
    await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    console.log("Updated favorites after removal:", newFavorites); // 추가된 로그
  } catch (e) {
    console.error(e);
  }
};
// 저장된 모든 영화 정보를 불러오는 함수
export const getFavoriteMovies = async () => {
  try {
    const favorites = await AsyncStorage.getItem("favorites");
    return favorites != null ? JSON.parse(favorites) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

// 모든 즐겨찾기를 삭제하는 함수
export const clearAllFavorites = async () => {
  try {
    await AsyncStorage.removeItem("favorites");
    console.log("All favorites cleared");
  } catch (error) {
    console.error("Error clearing favorites:", error);
  }
};
