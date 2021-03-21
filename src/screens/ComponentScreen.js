import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { HeaderTitle } from "react-navigation-stack";
// View elemet groups together other elements inside of it

const ComponentScreen = () => {
  const message = "Master X";

  return (
    <View>
      <HeaderTitle style={styles.textStyle}>
        {message},Welcome to ReactNative.
      </HeaderTitle>
      <Text style={styles.textStyle2}>Hope you have a good time!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontStyle: "italic",
    fontWeight: "300",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  textStyle2: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "200",
    textAlign: "center",
  },
});

export default ComponentScreen;
