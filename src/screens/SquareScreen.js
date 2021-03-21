import React, { useReducer } from "react"; // hook function like useState
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === {initialState}
  // action === {type: 'change_red' || 'change_green' || 'change_blue',payload: 15 || -15}
  // never change state directly

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    // always return a value/argument when working with reducers
    // So we copy the values using '...state' then add the change to theat copy & re-render the entire object
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // useReducer {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;
  // dispatch === runMyReducer }
  console.log(state);
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_red", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT });
        }}
        color="RED"
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT });
        }}
        color="GREEN"
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT });
        }}
        color="BLUE"
      />
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          height: 500,
          margin: 30,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
