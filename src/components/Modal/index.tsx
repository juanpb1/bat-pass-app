import React, {useState} from "react";

import {
    View,
    Text,
    Pressable,
} from "react-native";
import { styles } from "./styles";

import * as Clipboard from "expo-clipboard";
import BatButton from "../BatButton/index"


export default function ModalPassword({ password, handleClose}: any){

    const [copiado, setCopiado] = useState(false);

    const handleCopyButton = () => {
        Clipboard.setStringAsync(password);
        setCopiado(true);
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.textTitle}> Senha gerada</Text>
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.textInnerPassowrd}>{password}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <BatButton
                        styleBtn={styles.buttonBack}
                        styleTxtButton={styles.txtButtonBack}
                        txtButton={'Voltar'}
                        func={handleClose}
                    />
                    <BatButton
                        styleBtn={styles.buttonSave}
                        styleTxtButton={styles.txtButtonSave}
                        txtButton={copiado ? 'Copiado' : 'Copiar'}
                        func={handleCopyButton}
                    />
                </View>
            </View>
        </View>
    )
}