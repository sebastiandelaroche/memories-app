
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Index from './Screens/Index';
import AuthPeople from './Screens/AuthPeople';
import MyFiles from './Screens/MyFiles';


const AppMemories = StackNavigator({
	Index: { screen: Index },
	AuthPeople: { screen: AuthPeople },
	MyFiles: { screen: MyFiles }
});

AppRegistry.registerComponent('AppMemories', () => AppMemories);
