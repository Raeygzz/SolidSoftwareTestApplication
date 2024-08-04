import React, { useMemo, useState } from "react";
import { StyleSheet, Pressable, GestureResponderEvent } from "react-native";

import { TextField } from "../components";
import { getRandomColor, isColorDark } from "../utils";

const App = () => {
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const onChangeBackgroundColor = (e: GestureResponderEvent) => {
    setBgColor(getRandomColor());
  };

  const onTextHandler = (event: GestureResponderEvent) => {
    event.stopPropagation();
  };

  const textColor = useMemo(() => (isColorDark(bgColor) ? "white" : "black"), [bgColor]);

  return (
    <Pressable style={[styles.container, { backgroundColor: bgColor }]} onPress={onChangeBackgroundColor}>
      <TextField onPress={onTextHandler} textColor={textColor}>
        Hello There
      </TextField>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

