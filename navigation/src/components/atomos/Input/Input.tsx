import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../../themes/colors";

interface InputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input = ({ label, placeholder, secureTextEntry }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    marginBottom: 15,
    width: '100%' 
  },
  label: { 
    fontWeight: 'bold', 
    marginBottom: 5, 
    color: '#333' 
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
    padding: 10,
    height: 45,
    color: '#000'
  }
});

export default Input;