import React from "react";

import {
    Text,
    TouchableOpacity,
} from "react-native";

export default function BatButton(props: any){
    return(
        <TouchableOpacity 
            style={props.styleBtn}
            onPress={props.func}
        >
            <Text style={props.styleTxtButton}>{props.txtButton}</Text>
        </TouchableOpacity>
    )
}