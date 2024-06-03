import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FONTS, FONT_SIZES, COLORS } from "./src/constants";
import Button from "./src/components/Button";
import IconButton from "./src/components/IconButton";
import { MovieList } from "./src/components/MovieList";
export default function App() {
  return (
    <View style={styles.container}>
      <MovieList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    marginBottom: 10,
  },
});
