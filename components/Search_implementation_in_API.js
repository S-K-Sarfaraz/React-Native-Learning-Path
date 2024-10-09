import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Search_implementation_in_API = () => {
  const [data, setData] = useState([]);
  const searchUser = async text => {
    const url = `http://192.168.1.103:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.searchInput}
        onChangeText={text => searchUser(text)}
      />
      {data.length
        ? data.map(item => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>{item.age}</Text>
              <Text style={styles.details}>{item.city}</Text>
              <Text style={styles.details}>{item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
});

export default Search_implementation_in_API;
