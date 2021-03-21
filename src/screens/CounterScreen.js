import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const INCREMENT = 1;
// make a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  console.log(state);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: -1 * INCREMENT });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
