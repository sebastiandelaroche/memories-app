
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import AuthPeople from './Screens/AuthPeople';
import MyFamilies from './Screens/MyFamilies';


const AppMemories = StackNavigator({
  AuthPeople: { screen: AuthPeople },
  MyFamilies: { screen: MyFamilies }
});


AppRegistry.registerComponent('AppMemories', () => AppMemories);