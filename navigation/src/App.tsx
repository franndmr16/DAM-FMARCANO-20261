import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthStackParamList } from "./Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { LoginPage, RegisterPage } from "./screens";

const Stack = createNativeStackNavigator<AuthStackParamList>

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          contentStyle:{
            backgroundColor: "#ffff"
          }
        }}>
            <Stack.Screen name="Login" components={LoginPage}></Stack.Screen>
            <Stack.Screen name="Register" components={RegisterPage}></Stack.Screen>
        </Stack.navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;