import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ViewsScreen from '../screens/ViewsScreen';
import {Button, TextInput} from 'react-native';
// import SearchInput from '../components/SearchInput';

const Stack = createNativeStackNavigator();
const btnAction = () => {
  console.warn('Button Is Pressed');
};

// const HeaderTitle = () => <Button onPress={btnAction} title="Left Button" />;

// const SearchInput = () => {
//   return <TextInput placeholder="Search..." />;
// };

const CreateNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'gold',
          },
          headerTitleStyle: {
            fontSize: 30,
            color: 'green',
            fontWeight: '800',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Views Screen"
          component={ViewsScreen}
          options={{
            headerTitle: () => (
              <Button onPress={btnAction} title="Left Button" />
            ),
            headerRight: () => <TextInput placeholder="Search..." />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   headerName: {
//     fontSize: 30,
//     fontWeight: '800',
//     color: 'green',
//   },
// });

export default CreateNavigation;
