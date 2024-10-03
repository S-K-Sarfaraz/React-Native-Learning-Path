import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PressableEvent = () => {
  return (
    <View style={styles.main}>
      <Pressable
        // onPress={() => console.warn("One time Press")}
        // onLongPress={() => console.warn("For Long Press")}
        onPressIn={() => console.warn('Press In')}
        onPressOut={() => console.warn('Press Out')}>
        <Text style={styles.pressableText}>Please Press Me</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableText: {
    backgroundColor: 'yellow',
    fontSize: 20,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: 'black',
    textAlign: 'center',
    shadowColor: 'gold',
    elevation: 10,
  },
});

export default PressableEvent;
