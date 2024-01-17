import React from 'react';
import { Image, View,Text } from 'react-native';
import { styles } from './styles';
import batLogo from '../../assets/imgs/batman-logo2.png'

export function BatLogo() {
  return (
    <>
    <View></View>
      <View> 
        <Image
            source={batLogo}
            style={{
                resizeMode: 'contain',
                height: 180
            }}
        /> 
      </View>
      {/* <View>
        <Text style={styles.title}>BATPASS GENERATOR</Text>
      </View> */}
    </>
  );
}