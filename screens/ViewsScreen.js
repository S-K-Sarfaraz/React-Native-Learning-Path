import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ViewsScreen = (props) => {
  const {name,age} = props.route.params;  // this is the code for accessing the the data from the previous screen
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Only Views Page</Text>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default ViewsScreen;
