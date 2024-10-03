// import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from '../screens/Profile';
import Details from '../screens/Details';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="Settings" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
