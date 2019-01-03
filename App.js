import React, { Component } from 'react';
import { View, Text } from "react-native";
import {
  createMaterialTopTabNavigator, createAppContainer
} from 'react-navigation';

import MapView from 'react-native-maps';

class LoginScreen extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

import ProfileScreen from './js/ProfileScreen';
import DashboardScreen from './js/DashboardScreen';
import MapScreen from './js/MapScreen';

const TabNavigator = createMaterialTopTabNavigator({
  Profile: { screen: ProfileScreen },
  Dashboard: {screen: DashboardScreen },
  Map: { screen: MapScreen },
},
{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default createAppContainer(TabNavigator)
