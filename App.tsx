import {StyleSheet, View} from 'react-native';
import React from 'react';
// import Async_Storage_implementation from './components/Async_Storage_implementation';
// import Using_Ref_in_input from './components/Using_Ref_in_input';
// import Search_implementation_in_API from './components/Search_implementation_in_API';
// import Integrate_API_With_Put_Method from './components/Integrate_API_With_Put_Method';
// import Populate_Data_In_Modal_API from './components/Populate_Data_In_Modal_API';
// import Modal_for_Updating_API from './components/Modal_for_Updating_API';
// import Delet_API from './components/Delet_API';
// import Make_List_From_API from './components/Make_List_From_API';
// import Simple_Form_Validation from './components/Simple_Form_Validation';
// import Post_API_With_InputField from './components/Post_API_With_InputField';
// import SimplePostAPI from './components/SimplePostAPI';
// import LocalAPICreation from './components/LocalAPICreation';
// import FlatListAPI from './components/FlatListAPI';
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

// Redux implementation
import Header from './components/Header';
import Product from './components/Product';

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
      {/* <FlatListAPI/> */}
      {/* <LocalAPICreation/> */}
      {/* <SimplePostAPI/> */}
      {/* <Post_API_With_InputField/> */}
      {/* <Simple_Form_Validation/> */}
      {/* <Make_List_From_API /> */}
      {/* <Delet_API/> */}
      {/* <Modal_for_Updating_API/> */}
      {/* <Populate_Data_In_Modal_API /> */}
      {/* <Integrate_API_With_Put_Method /> */}
      {/* <Search_implementation_in_API /> */}
      {/* <Using_Ref_in_input /> */}
      {/* <Async_Storage_implementation /> */}

      <Header />
      <Product />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
