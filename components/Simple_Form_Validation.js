import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Simple_Form_Validation = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveData = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!age) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!name || !age || !email) {
      return false;
    }
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
      <Text style={styles.heading}>Simple Post Validation</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter Name..."
      />
      {nameError ? (
        <Text style={styles.errorMessage}>Please Enter The Valid Name</Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        placeholder="Enter Age..."
      />
      {ageError ? (
        <Text style={styles.errorMessage}>Please Enter The Valid Name</Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Email..."
      />
      {emailError ? (
        <Text style={styles.errorMessage}>Please Enter The Valid Name</Text>
      ) : null}
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
    margin: 5,
    fontSize: 20,
  },
  errorMessage: {
    marginBottom: 15,
    marginLeft: 5,
    color: '#ff4d4d',
    fontSize: 15,
  },
});

export default Simple_Form_Validation;
