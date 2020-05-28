/*import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
// new:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    MainNav: MainTabNavigator,
  })
);
*/

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
//import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';




export default mytest= () => (
  <NavigationContainer
    independent={true}
  //style={{}}
  >
    <MainTabNavigator/>
  </NavigationContainer>
)