import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({});

export const styles = EStyleSheet.create({
    section: {
        justifyContent: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginTop: '1rem',
        marginLeft: '4rem',
    },
    checkbox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtCheckBox: {
        fontSize: '1rem'
    },  
});