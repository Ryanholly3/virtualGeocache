import React, { Component } from 'react';
import { View, Text } from "react-native";
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

var ProfileScreen = require('./js/ProfileScreen')
var DashboardScreen = require('./js/DashboardScreen')
var ARSceneScreen = require('./js/ARSceneScreen')

const AppNavigator = TabNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
  Dashboard: {screen: DashboardScreen },
  ARScene: { screen: ARSceneScreen }
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

module.exports = LoginScreen
