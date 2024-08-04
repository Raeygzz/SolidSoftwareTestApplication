import React, { ReactNode } from "react";
import { GestureResponderEvent, StyleSheet, Text } from "react-native";

type TextFieldProps = {
  children: ReactNode;
  textColor: string;
  onPress: (event: GestureResponderEvent) => void;
};

const TextField = ({ children, textColor, onPress }: TextFieldProps) => {
  return (
    <Text onPress={onPress} style={[styles.text, { color: textColor }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export { TextField };
