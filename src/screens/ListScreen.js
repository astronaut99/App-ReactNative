import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// 'FlatList' converts value of objects into an Array, key properties are necessary
const ListScreen = () => {
  const friends = [
    { name: "Friend #1", key: "1", age: 20 },
    { name: "Friend #2", key: "2", age: 21 },
    { name: "Friend #3", key: "3", ag1: 21 },
    { name: "Friend #4", key: "4", age: 26 },
    { name: "Friend #5", key: "5", age: 22 },
    { name: "Friend #6", key: "6", age: 23 },
  ];
  return (
    <FlatList
      horizontal={false} // Makes scroll horizontal
      showsHorizontalScrollIndicator={false} // Hides Scroll Bar
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        console.log(item.name);
        return (
          <View>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Text style={styles.textStyle}>Age: {item.age}</Text>
          </View>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
    fontSize: 30,
  },
});

export default ListScreen;
