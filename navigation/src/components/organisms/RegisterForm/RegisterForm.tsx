import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Input } from "../../atomos";
import { styles } from "./RegisterFormStyle";

interface RegisterFormProps {
  onSubmit: () => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  return (
    <ScrollView 
      style={styles.scrollContainer} 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Input label="FULL NAME" placeholder="John Doe" />
      <Input label="USERNAME" placeholder="johndoe123" />
      <Input label="EMAIL ADDRESS" placeholder="johndoe@example.com" />
      <Input label="DATE OF BIRTH" placeholder="YYYY-MM-DD" />
      <Input label="PASSWORD" placeholder="Minimum 8 chars" secureTextEntry={true} />
      <Input label="CONFIRM PASSWORD" placeholder="Re-enter password" secureTextEntry={true} />
      
      <Button title="Registrarme" onSubmit={onSubmit} />
    </ScrollView>
  );
};

export default RegisterForm;