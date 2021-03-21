import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to React</Text>
      <Button
        onPress={() => {
          navigation.navigate("Component");
        }}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Go to List Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate("Image");
        }}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("Color");
        }}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("Square");
        }}
        title="Go to Square Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("Text");
        }}
        title="Go to Text Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate("Box");
        }}
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  buttonStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: "right",
  },
});

export default HomeScreen;
