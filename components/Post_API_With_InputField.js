import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Post_API_With_InputField = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  const saveData = async () => {
    console.warn(name);
    console.warn(age);
    console.warn(email);
    const url = 'http://192.168.1.103:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email}),
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Post_API_With_InputField</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter Name..."
      />
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        placeholder="Enter Age..."
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Email..."
      />
      <Button title="Save Data" onPress={saveData} />
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
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 20,
    fontSize: 20,
  },
});

export default Post_API_With_InputField;
