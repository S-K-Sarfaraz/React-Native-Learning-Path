import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const FlatListAPI = () => {
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
    <View style={styles.container}>
      <Text style={styles.heading}>
        This is the API implementation in FlatList.
      </Text>
      {data.length ? (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.userId}>{item.id}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>
                <Text style={styles.decoratedText}>Description: </Text>
                {item.body}
              </Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No Data Found</Text>
        </View>
      )}
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
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 20,
  },
  card: {
    width: 'auto',
    height: 180,
    backgroundColor: '#121212',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  userId: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 10,
  },
  decoratedText: {
    color: 'white',
    textAlign: 'left',
    fontSize: 17,
  },
  body: {
    fontSize: 17,
  },
});

export default FlatListAPI;
