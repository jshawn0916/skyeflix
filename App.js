import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { COLORS, FONTS, FONT_SIZES, SPACES } from "./src/constants";
import List from "./src/components/List";
import MovieList from "./src/components/MovieList";
import Header from "./src/components/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  PlusJakartaSans_300Light,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
} from "@expo-google-fonts/plus-jakarta-sans";
import { RobotoCondensed_700Bold } from "@expo-google-fonts/roboto-condensed";

export default function App() {
  const [fontsLoaded] = useFonts({
    [FONTS.LIGHT]: PlusJakartaSans_300Light,
    [FONTS.REGULAR]: PlusJakartaSans_400Regular,
    [FONTS.MEDIUM]: PlusJakartaSans_500Medium,
    [FONTS.LOGO]: RobotoCondensed_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={COLORS.WHITE} />;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={{ marginVertical: SPACES.SPACE_8 }}>
          <Text
            style={{
              fontFamily: FONTS.MEDIUM,
              color: COLORS.WHITE,
              fontSize: FONT_SIZES.EXTRA_LARGE * 1.25,
            }}
          >
            Upcoming Movies{" "}
          </Text>
        </View>
        <MovieList />
        {/* <List /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACES.SPACE_6,
    backgroundColor: COLORS.BLACK,
  },
});
