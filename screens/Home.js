import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Home = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Only Home Page</Text>
      <TextInput
        style={styles.inputTextContainer}
        placeholder="Enter Name..."
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputTextContainer}
        placeholder="Enter Age..."
        onChangeText={text => setAge(text)}
      />
      <Button
        title="Go to Views Page"
        onPress={() => props.navigation.navigate('Views Screen', {name, age})}  // this is where the data is passed
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#121212',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  inputTextContainer: {
    fontSize: 20,
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default Home;
