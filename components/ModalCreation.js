import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const ModalCreation = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              This is the Modal View for the Creation Perpose
            </Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'green',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'white',
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
});

export default ModalCreation;
