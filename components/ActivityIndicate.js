import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ActivityIndicate = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <View style={styles.main}>
      <ActivityIndicator size={'large'} color={'red'} animating={show} />
      <TouchableOpacity onPress={() => setShow(displayLoader)}>
        <Text style={styles.changeButton}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  changeButton: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
  },
});

export default ActivityIndicate;
