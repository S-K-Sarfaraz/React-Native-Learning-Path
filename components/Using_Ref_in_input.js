import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';

const Using_Ref_in_input = () => {
  const inputRef = useRef();

  const updataeInput = () => {
    console.warn('called');
    inputRef.current.focus();
    inputRef.current.setNativeProps({
      color: 'yellow',
      fontWeight: 'bold',
      backgroundColor: 'green',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Using_Ref_in_input</Text>
      <TextInput
        ref={inputRef}
        placeholder="Enter Name"
        style={styles.searchInput}
      />
      <TextInput placeholder="Enter Age" style={styles.searchInput} />
      <Button title="Submit" onPress={updataeInput} />
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
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
  },
});

export default Using_Ref_in_input;
