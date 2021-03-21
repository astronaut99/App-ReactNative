import React, { useState } from "react"; // hook function like useState
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      <View>
        <Text style={styles.display}>My name is {name}</Text>
        {name.length < 5 ? (
          <Text>Password is less than 5 characters </Text>
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 4,
    textAlign: "center",
    fontSize: 20,
  },
  display: {
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});

export default TextScreen;
