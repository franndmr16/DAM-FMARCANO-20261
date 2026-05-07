import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../atomos";

interface LoginFormProps{
    onSubmit: () => void;
}

const LoginForm = (
    {onSubmit}: LoginFormProps
) =>{
    return(
        <View>
            <Text>Formulario Registro</Text>
            <Button title="Iniciar Sesión" onbSubimt={onSubmit}></Button>
        </View>
    )
}

export default LoginForm