import React from "react";
import { AuthTemplate } from "../../components/templates";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";

const LoginPage = () =>{
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    
    const handleRegister = () => {
        console.log("Tap en registro")
        navigation.navigate('Login');
    }
    return(
        <AuthTemplate
            title="Register"
            subtitle="Create a new account">
            <LoginForm onSubmit={handleRegister}></LoginForm>
        </AuthTemplate>
    )
}

export default LoginPage;