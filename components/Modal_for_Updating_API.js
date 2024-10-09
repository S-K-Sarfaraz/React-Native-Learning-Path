import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Modal_for_Updating_API = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);

  //   get Data from API
  const getAPIData = async () => {
    const url = 'http://192.168.1.103:3000/users';
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if (result) {
      setData(result);
    }
  };

  //   Delete Data from API and update table on UI
  const deleteUser = async id => {
    const url = 'http://192.168.1.103:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      console.warn('User Deleted');
    }
    getAPIData();
  };

  //   Update Modal
  const updateModal = Modaldata => {
    setModalVisible(true);
    setSelectedUser(Modaldata);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>Modal_for_Updating_API</Text>
      <View style={styles.dataWrapper}>
        <View style={styles.dataName}>
          <Text style={styles.headingText}>Name</Text>
        </View>
        <View style={styles.dataAge}>
          <Text style={styles.headingText}>Age</Text>
        </View>
        <View style={styles.dataOptions}>
          <Text style={styles.headingText}>Options</Text>
        </View>
      </View>
      {/* Table */}
      {data.length
        ? data.map(item => (
            <View style={styles.dataWrapper}>
              <View style={styles.dataVaue}>
                <Text>{item.name}</Text>
              </View>
              <View style={styles.dataVaue}>
                <Text>{item.age}</Text>
              </View>
              <View style={styles.dataVaue}>
                <Button title="Delet" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={styles.dataVaue}>
                <Button title="Update" onPress={() => updateModal(item)} />
              </View>
            </View>
          ))
        : null}

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <UserModal
          setModalVisible={setModalVisible}
          selectedUser={selectedUser}
        />
      </Modal>
    </View>
  );
};

const UserModal = props => {
//   console.warn(props.selectedUser);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{props.selectedUser.name}</Text>
        <Button
          title="Close Modal"
          onPress={() => props.setModalVisible(false)}
        />
      </View>
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
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'green',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    gap: 3,
  },
  dataVaue: {
    flex: 1,
  },
  dataName: {
    flex: 1,
  },
  dataAge: {
    flex: 1,
  },
  dataOptions: {
    flex: 2,
    alignItems: 'center',
  },
  headingText: {
    fontWeight: '800',
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: 'black',
  },
});

export default Modal_for_Updating_API;
