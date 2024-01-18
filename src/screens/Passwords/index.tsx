import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { useStorage } from '../../hooks/useStorage';
import { useIsFocused } from '@react-navigation/native';

export function Passwords() {

  const { getItem } = useStorage();
  const isFocused = useIsFocused();
  const[myPasswords, setMyPasswords] = useState([])

  useEffect(() => {
    async function getPasswords() {
      const response = await getItem("@pass")
      setMyPasswords(response);
    }
    
    getPasswords()
  },[isFocused])

  const renderItem = ({item}: any) => {
    return (
      <Text>{item}</Text>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Text style={styles.txtTitulo}>Minhas Senhas</Text>
      </View>
      <View style={styles.boxPasswords}>
        <FlatList
          data={myPasswords}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}