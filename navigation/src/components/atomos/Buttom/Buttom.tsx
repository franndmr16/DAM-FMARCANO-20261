import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
    title: string;
    onbSubimt?: () => void;
}

const Button = (
    {title, onbSubimt}: ButtonProps
) => {
    return(
      <Pressable onPress={onbSubimt}>
        <Text>{title}</Text>
      </Pressable>  
    );

};

export default Button;