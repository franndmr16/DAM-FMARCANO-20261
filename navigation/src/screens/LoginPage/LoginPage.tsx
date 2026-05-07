import React from "react";
import { AuthTemplate } from "../../components/templates";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";

const LoginPage = () =>{
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    
    const handleLogin = () => {
        console.log("Tap en iniciar sesión")
        navigation.navigate('Register');
    }
    return(
        <AuthTemplate
            title="Login">
            <LoginForm onSubmit={handleLogin}></LoginForm>
        </AuthTemplate>
    )
}

export default LoginPage;