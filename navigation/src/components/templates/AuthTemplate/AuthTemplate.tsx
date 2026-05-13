import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./AuthTemplateStyles";

interface AuthTemplateProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const AuthTemplate = ({title, subtitle, children}: AuthTemplateProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{title}</Text>
                { subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            <View style={styles.formContainer}>
                {children}
            </View>
        </SafeAreaView>
    );
}

export default AuthTemplate;