// import { StyleSheet } from 'react-native';

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   containerImg: {
//     width: 100,
//     height: 100
//   }
// });
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({});

export const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F3F3FF"
    },
    logoHome: {
        alignSelf: 'center',
        width: '10rem',
        height: '10rem',
        marginBottom: '2rem',
    },
    boxSlider: {
        width: "100%",
        marginTop: '1rem',
    },
    txtSlider: {
        alignSelf: 'center',
        fontSize: '1.5rem',
    },
    slider: {
        alignSelf: 'center',
        width: '80%',
        color: '#242424',
        
    },
    button: {
        backgroundColor: '#242424',
        padding: '1rem',
        paddingHorizontal: '4rem',
        marginTop: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '2rem',
    },
    txtButton: {
        color: '#FFF'
    }
})