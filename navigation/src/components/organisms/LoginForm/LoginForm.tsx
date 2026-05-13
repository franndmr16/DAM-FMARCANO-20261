import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Input } from "../../atomos";
import { AuthStackParamList } from "../../../Routes";
import { COLORS } from "../../../themes/colors";
import { styles } from "./LoginFormStyle";

interface LoginProps {
  onSubmit?: () => void;
}

const LoginForm = ({ onSubmit }: LoginProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.container}>
      <Input label="Username" placeholder="johndoe" />
      <Input label="Password" placeholder="********" secureTextEntry={true} />
      
      <Pressable style={styles.forgotContainer}>
        <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
      </Pressable>

      <Button title="LOGIN" onSubmit={onSubmit} />

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginForm;