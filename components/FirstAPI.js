import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const FirstAPI = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FirstAPI</Text>
      {data ? (
        <View>
          <Text style={styles.text}>ID: {data.id}</Text>
          <Text style={styles.text}>User Id: {data.userId}</Text>
          <Text style={styles.text}>Title: {data.title}</Text>
          <Text style={styles.text}>Body: {data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: '800',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'green',
  },
});

export default FirstAPI;
