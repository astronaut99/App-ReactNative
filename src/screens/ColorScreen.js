import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColor([...color, randomRgb()]); // [...colors] means take a look at all the elements inside there an add them inside the new array
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={color}
        renderItem={({ item }) => {
          // item === rgb(v1,v2,v3)
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
