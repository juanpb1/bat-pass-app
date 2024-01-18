import React, {useState} from "react";

import {
    View,
    Text,
    Pressable,
} from "react-native";
import { styles } from "./styles";

import * as Clipboard from "expo-clipboard";
import BatButton from "../BatButton/index"
import { useStorage } from "../../hooks/useStorage";
import { Message } from '../../components/Message';

export default function ModalPassword({ password, handleClose}: any){

    const { saveItem } = useStorage();
    const [messageErro, setMessageErro] = useState(false)
    const [textMessage, setTextMessage] = useState('');

    async function handleCopyPassword() {
        Clipboard.setStringAsync(password);
        await saveItem("@pass", password)
        setTextMessage('Senha copiada com sucesso!');
        setMessageErro(true);
        await new Promise(() => setTimeout(() => {
            setMessageErro(prevMessageErro => !prevMessageErro);
        }, 10000))
    }

    async function handleSavePassword() {
        Clipboard.setStringAsync(password);
        await saveItem("@pass", password);
        setTextMessage('Senha salva com sucesso!');
        setMessageErro(true);
        await new Promise(() => setTimeout(() => {
            setMessageErro(prevMessageErro => !prevMessageErro);
        }, 10000))
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.textTitle}> Senha gerada</Text>
                <Message messageErro={messageErro} color={'#00bd10'} text={textMessage}/>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
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
                        txtButton={'Salvar'}
                        func={handleSavePassword}
                    />
                </View>
            </View>
        </View>
    )
}