import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SimplePostAPI = () => {
  const saveAPIData = async () => {
    const data = {
      name: 'jane',
      age: 25,
      email: 'jane@example.com',
    };

    const url = 'http://192.168.1.103:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Simple Post API</Text>
      <Button title="Save Data" onPress={saveAPIData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    color: 'white',
    marginBottom: 10,
  },
});

export default SimplePostAPI;
