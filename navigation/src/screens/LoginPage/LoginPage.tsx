import React from "react";
import { AuthTemplate } from "../../components/templates";

const LoginPage = () =>{
    return(
        <AuthTemplate
            title="Login">
            <LoginForm/>
        </AuthTemplate>
    )
}

export default LoginPage;