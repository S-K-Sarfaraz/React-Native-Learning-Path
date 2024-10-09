import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Populate_Data_In_Modal_API = () => {
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
      <Text style={styles.heading}>Populate_Data_In_Modal_API</Text>
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
                <Text style={styles.tableText}>{item.name}</Text>
              </View>
              <View style={styles.dataVaue}>
                <Text style={styles.tableText}>{item.age}</Text>
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
  console.warn(props.selectedUser);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age.toString());
      setEmail(props.selectedUser.email);
    }
  }, [props.selectedUser]);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput value={name} style={styles.modalTextInput} />
        <TextInput value={age} style={styles.modalTextInput} />
        <TextInput value={email} style={styles.modalTextInput} />
        <View style={styles.updateBtn}>
          <Button
            title="Close Modal"
            onPress={() => props.setModalVisible(false)}
          />
          <Button title="Save" />
        </View>
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
  tableText: {
    fontSize: 20,
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
    fontSize: 20,
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
    padding: 20,
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
  modalTextInput: {
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    fontSize: 20,
    width: 300,
    color: 'black',
  },
  updateBtn: {
    flexDirection: 'row',
    gap: 50,
  },
});

export default Populate_Data_In_Modal_API;
