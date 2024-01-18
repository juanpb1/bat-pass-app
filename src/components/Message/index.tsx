import React from 'react';
import { View, Text} from 'react-native';

export function Message( {messageErro, color, text}:any) {
  return (
    <>
        {messageErro && (
            <View>
                <Text style={{color: color}}>{text}</Text>
            </View>
        )}
    </>
  );
}