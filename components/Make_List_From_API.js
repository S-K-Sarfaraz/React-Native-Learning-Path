import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Make_List_From_API = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = 'http://192.168.1.103:3000/users';
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if (result) {
      setData(result);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Make_List_From_API</Text>
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
                <Button title="Delet" />
              </View>
              <View style={styles.dataVaue}>
                <Button title="Update" />
              </View>
            </View>
          ))
        : null}
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
});

export default Make_List_From_API;
