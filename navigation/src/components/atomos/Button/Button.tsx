import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./ButtonStyles";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onSubmit?: () => void;
}

const Button = ({ title, onSubmit, disabled}: ButtonProps) => {
  return (

    //colocar aqui el disabled junto al onPress
    <Pressable style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;