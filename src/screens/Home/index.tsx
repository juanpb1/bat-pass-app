import React, {useState} from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { BatLogo } from '../../components/BatLogo';
import BatButton from '../../components/BatButton';
import Section from '../../components/Section';
import ModalPassword from '../../components/Modal';
import Slider from '@react-native-community/slider';

import passwordGenerator from '../../services/passwordService';

export function Home() {
    const [isCheckedLetters, setCheckedLetters] = useState(false);
    const [isCheckedSymbols, setCheckedSymbols] = useState(false);
    const [isCheckedNumbers, setCheckedNumbers] = useState(false);
    const [size, setSize] = useState(4);
    const [passwordValue, setPasswordValue] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);    
    const [messageErro, setMessageErro] = useState(false)

    const handleButton = async () => {
        let password = passwordGenerator({isCheckedLetters, isCheckedSymbols, isCheckedNumbers, size})
        if(password === ''){
            setMessageErro(true);
            await new Promise(() => setTimeout(() => {
                setMessageErro(prevMessageErro => !prevMessageErro);
            }, 10000))
            console.log('entrou')
        }else{
            setPasswordValue(password)
            setVisibleModal(true);
        }
    }

    return (
        <View style={styles.container}>
            <BatLogo/>
            {messageErro && (
                <View>
                    <Text style={{color: '#c42f2f'}}>Selecione pelo menos uma opção!</Text>
                </View>
            )}
            <Section
                text={"Letras(A-Z | a-z)"}
                value={isCheckedLetters}
                onValueChange={setCheckedLetters}
            />
            <Section
                text={"Símbolos(*, %, $)"}
                value={isCheckedSymbols}
                onValueChange={setCheckedSymbols}
            />
            <Section
                text={"Números(0-9)"}
                value={isCheckedNumbers}
                onValueChange={setCheckedNumbers}
            />
            <View style={styles.boxSlider}>
                <Text style={styles.txtSlider}>
                    {size} caracteres.
                </Text>
                <Slider
                    style={styles.slider}
                    value={size}
                    onValueChange={(value) => setSize(value)}
                    step={1}
                    minimumValue={4}
                    maximumValue={16}
                    thumbTintColor="#242424"
                    minimumTrackTintColor="#242424"
                    maximumTrackTintColor="#242424"
                />
            </View>
            <BatButton
                styleBtn={styles.button}
                styleTxtButton={styles.txtButton}
                txtButton={'Gerar senha'}
                func={handleButton}
            />
            <Modal visible={visibleModal} animationType={'fade'} transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setVisibleModal(false)}/>
            </Modal>
        </View>
    );
}