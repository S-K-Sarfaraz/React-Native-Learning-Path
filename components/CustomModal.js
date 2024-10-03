import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const CustomModal = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text style={styles.text}>This is the Modal View</Text>
            <Button title="Close Modal" onPress={() => setShow(false)} />
          </View>
        </View>
      ) : null}
      <Button title="Open Modal" onPress={() => setShow(true)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,

    backgroundColor: 'rgba(300,300,300,0.5)',

    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: 300,
    width: 300,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default CustomModal;
