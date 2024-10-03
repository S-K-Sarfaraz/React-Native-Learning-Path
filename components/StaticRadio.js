import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const StaticRadio = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    margin: 10,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 20,
  },
  radioText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'yellow',
  },
  radioBg: {
    height: 28,
    width: 28,
    borderRadius: 20,
    backgroundColor: 'yellow',
    margin: 4,
  },
});

export default StaticRadio;
