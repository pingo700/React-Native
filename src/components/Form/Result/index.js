import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Result(props){
    return(
        <View>
            <Text>{props.messageResult}</Text>
        </View>
    );
}