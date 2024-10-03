import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const ListAPI = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <ScrollView>
      <Text style={styles.heading}>API calling for bigger list</Text>
      {data.length
        ? data.map(item => (
            <View style={styles.block}>
              <Text style={styles.idText}>Id: {item.id}</Text>
              <Text style={styles.text}>
                <Text style={styles.textHeading}>Title: </Text>
                {item.title}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.textHeading}>Description: </Text>
                {item.body}
              </Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white',
    margin: 20,
  },
  block: {
    margin: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  idText: {
    backgroundColor: '#121212',
    fontSize: 25,
  },
  text: {
    marginVertical: 5,
    fontSize: 20,
  },
  textHeading: {
    fontWeight: '800',
    color: 'white',
  },
});

export default ListAPI;
