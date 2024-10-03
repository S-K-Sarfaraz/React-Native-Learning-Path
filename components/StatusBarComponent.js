import {Button, StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

const StatusBarComponent = () => {
  const [hide, setHide] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState('dark-content');
  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={'green'}
        barStyle={statusBarStyle}
        hidden={hide}
      />
      <Button title="Toggle Status Bar" onPress={() => setHide(!hide)} />
      <Button
        title="Change Style"
        onPress={() => setStatusBarStyle(statusBarStyle === 'dark-content' ? 'light-content' : 'dark-content')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:"center",
    gap: 20,
  },
});

export default StatusBarComponent;
