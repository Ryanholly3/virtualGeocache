import React, { Component } from 'react';
import { View, Text } from "react-native";
import {
  createMaterialTopTabNavigator, createAppContainer
} from 'react-navigation';

class LoginScreen extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

var ProfileScreen = require('./js/ProfileScreen')
var DashboardScreen = require('./js/DashboardScreen')
var MapScreen = require('./js/MapScreen')

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
