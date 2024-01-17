import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({});

export const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: '#FFF',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        borderRadius: '1rem',
    },
    textTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    innerPassword: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#242424',
        margin: '0.3rem',
        padding: '0.3rem',
        borderRadius: '0.3rem',
    },
    textInnerPassowrd: {
        color: '#FFF',
        fontSize: '1.2rem',
    },
    buttonArea: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem',
        margin: '0.5rem',
    },
    buttonBack: {
        flex: 1,
        alignItems: 'center',
    },
    txtButtonBack:{
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    buttonSave: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#242424',
        padding: '1rem',
        margin: '0.5rem',
        justifyContent: 'center',
        borderRadius: '1rem',
    },
    txtButtonSave:{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#FFF',
    },
});