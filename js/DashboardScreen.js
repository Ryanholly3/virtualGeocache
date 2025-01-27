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

var InitialARScene = require('./ARSceneScreen');

export default class DashboardScreen extends Component {

  constructor() {
    super();
    this.state = {
      sharedProps: sharedProps,
    };

    this._getARNavigator = this._getARNavigator.bind(this);
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
      <View style={styles.outer} >
        <View style={styles.inner} >

          <Text style={styles.titleText}>
            DASHBOARD
          </Text>

          <TouchableHighlight style={styles.buttons}
            onPress={this._getARNavigator}
            underlayColor={'#68a0ff'} >

            <Text style={styles.buttonText}>AR Mode</Text>
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
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 25,
  }
});

module.exports = DashboardScreen;
