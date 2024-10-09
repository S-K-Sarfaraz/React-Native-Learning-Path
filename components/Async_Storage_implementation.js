import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Async_Storage_implementation = () => {
  const [name, setName] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem('name', 'sarfaraz');
  };
  const getData = async () => {
    const userName = await AsyncStorage.getItem('name');
    setName(userName);
    console.warn(userName);
  };
  const removedData = async () => {
    await AsyncStorage.removeItem('name');
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Async_Storage_implementation | {name}</Text>
      <Button title="Set Data" style={styles.button} onPress={setData} />
      <Button title="Get Data" style={styles.button} onPress={getData} />
      <Button title="Remove Data" style={styles.button} onPress={removedData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
  },
  button: {
    marginVertical: 10,
  },
});

export default Async_Storage_implementation;
