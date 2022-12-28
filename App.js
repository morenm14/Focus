import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar} from 'react-native';
import Constants from "expo-constants";
import {colors} from "./src/utils/colors"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
      <Text style={styles.text}>Open up App.js to start kicking ass on your app!</Text>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text:{
    color: colors.white
  }
});
