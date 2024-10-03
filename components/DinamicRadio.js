import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const DinamicRadio = () => {
  const skills = [
    {
      id: 1,
      name: 'JAVA',
    },
    {
      id: 2,
      name: 'JS',
    },
    {
      id: 3,
      name: 'Python',
    },
    {
      id: 4,
      name: 'SQL',
    },
    {
      id: 5,
      name: 'PHP',
    },
    {
      id: 6,
      name: 'C++',
    },
  ];
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.wrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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

export default DinamicRadio;
