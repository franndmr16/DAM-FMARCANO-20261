import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";
import { AuthService } from "core/services";

const LoginPage = () =>{
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    
    const handleRegister = async () => {
        console.log("Tap en registro")

        const dummyUser = {
            nombre: 'Pepito',
            username: 'Pepito_unbosque',
            correo: 'pepito@unbosque.edu.co',
            fechaNacimiento: '10/10/2003',
            contrasena: '12345'
        }

        await AuthService.register(dummyUser)  ;

        navigation.navigate('Login');
    }
    return(
        <AuthTemplate
            title="Register"
            subtitle="Create a new account"> 
           <RegisterForm onSubmit={handleRegister} />
        </AuthTemplate>
    )
}

export default LoginPage;

