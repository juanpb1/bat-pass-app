import React from "react";

import {
    View,
    Text
} from "react-native"
import { styles } from "./styles";

import Checkbox from 'expo-checkbox';

interface SectionProps{
    value: boolean
    onValueChange: (value: boolean) => void
    text: string
}

export default function Section(props: SectionProps){
    return(
        <View style={styles.section}>
            <Checkbox
                value={props.value}
                onValueChange={props.onValueChange}
                color={'#242424'}
            />
            <Text style={styles.txtCheckBox}> {props.text} </Text>
        </View>
    )
}