import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const LocalAPICreation = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'http://192.168.1.103:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LocalAPICreation</Text>
      {data.length
        ? data.map(item => (
            <View style={styles.card}>
              <Text>{item.name}</Text>
              <Text>{item.id}</Text>
              <Text>{item.email}</Text>
              <Text>{item.age}</Text>
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
  card: {
    width: 'auto',
    height: 180,
    backgroundColor: '#121212',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default LocalAPICreation;
