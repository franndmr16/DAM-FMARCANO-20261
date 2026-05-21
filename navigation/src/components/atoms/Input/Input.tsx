import React from "react";
import { TextInput } from "react-native";
import { styles } from "./InputStyle";

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;                         
  onChangeText?: (text: string) => void; 
}

const Input = ({
  placeholder,
  secureTextEntry,
  value,          
  onChangeText,   
}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#ef7f00"
      secureTextEntry={secureTextEntry}
      value={value}               
      onChangeText={onChangeText}  
    />
  );
};

export default Input;