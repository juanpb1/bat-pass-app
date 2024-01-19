import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { useStorage } from '../../hooks/useStorage';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export function Passwords() {

  const { getItem, removeItem } = useStorage();
  const isFocused = useIsFocused();
  const[myPasswords, setMyPasswords] = useState([])
  const [eyePasswords, setEyePasswords] = useState(false);

  useEffect(() => {
    async function getPasswords() {
      const response = await getItem("@pass")
      setMyPasswords(response);
    }
    
    getPasswords()
  },[isFocused, myPasswords, eyePasswords])

  async function handleDeletePassword(item: any){
    const passwords = await removeItem("@pass", item);
    setMyPasswords(passwords);
  }

  const renderItem = useCallback(({item} : any) =>  (
    eyePasswords ? (
      <View style={styles.viewPassword}>
        <Text style={styles.txtPassword}>{item}</Text>
        <TouchableOpacity onPress={() => {handleDeletePassword(item)}}>
          <AntDesign style={{ alignSelf: 'flex-end'}} name="delete" size={24} color="white" />
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.viewPassword}>
        <View style={styles.viewEyePassword}>
          <Text style={styles.txtPassword}>{item}</Text>
        </View>
      </View>
    )
  ), [eyePasswords]);


  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
          <Text style={styles.txtTitulo}>Minhas Senhas</Text>
          <TouchableOpacity style={styles.buttonEye} onPress={() => {
            setEyePasswords(value => !value)
          }}>
            <FontAwesome name={eyePasswords ? "eye" : "eye-slash"} size={24} color="white" />
          </TouchableOpacity>
      </View>
      <View style={styles.boxPasswords}>
        <FlatList
          data={myPasswords}
          renderItem={renderItem}
          initialNumToRender={10}
        />
      </View>
      <StatusBar
        backgroundColor='#FFF'
      />
    </View>
  );
}