'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

var sharedProps = {
  apiKey:"912A3CB8-1A43-42D2-BFDF-2659B6DA962E",
}

var InitialVRScene = require('./js/ARScene');

export default class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      user: {}
    };

  }

  _getARNavigator() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}}
        worldAlignment={"GravityAndHeading"}
      />
    );
  }

  render() {
    return (
      <View style={localStyles.outer} >
        <View style={localStyles.inner} >

          <Text style={localStyles.titleText}>
            DASHBOARD
          </Text>

          <TouchableHighlight style={localStyles.buttons}
            onPress={this._getARNavigator()}
            underlayColor={'#68a0ff'} >

            <Text style={localStyles.buttonText}>AR Mode</Text>
          </TouchableHighlight>

        </View>
      </View>
    );
  }


}

var styles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
});

module.exports = Dashboard;
