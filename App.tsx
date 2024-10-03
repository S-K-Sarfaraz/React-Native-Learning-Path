import {StyleSheet, View} from 'react-native';
import React from 'react';
import FlatListAPI from './components/FlatListAPI';
// import ListAPI from './components/ListAPI';
// import FirstAPI from './components/FirstAPI';
// import TopNavigation from './navigation/TopNavigation';
// import TabNavigation from './navigation/TabNavigation';
// import CreateNavigation from './navigation/CreateNavigation';
// import CustomModal from './components/CustomModal';
// import WebComponent from './components/WebComponent';
// import StatusBarComponent from './components/StatusBarComponent';
// import PressableEvent from './components/PressableEvent';
// import ModalCreation from './components/ModalCreation';
// import ActivityIndicate from './components/ActivityIndicate';
// import StaticRadio from './components/StaticRadio';
// import DinamicRadio from './components/DinamicRadio';

const App = () => {
  return (
    <View style={styles.main}>
      {/* <DinamicRadio /> */}
      {/* <StaticRadio /> */}
      {/* <ActivityIndicate /> */}
      {/* <ModalCreation /> */}
      {/* <PressableEvent/> */}
      {/* <StatusBarComponent/> */}
      {/* <WebComponent/> */}
      {/* <CustomModal/> */}
      {/* <CreateNavigation/> */}
      {/* <TabNavigation/> */}
      {/* <TopNavigation /> */}
      {/* <FirstAPI/> */}
      {/* <ListAPI/> */}
      <FlatListAPI/>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
