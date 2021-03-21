import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child 1</Text>
      <Text style={styles.textStyle2}>Child 2</Text>
      <Text style={styles.textStyle3}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 100,
    flexDirection: "row",
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    textAlign: "center",
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    textAlign: "center",
    marginTop: 10,
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    textAlign: "center",
  },
});

export default BoxScreen;
