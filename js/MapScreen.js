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

// import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';


class MapScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

  }


  render() {
    return (
        <View>

          <Text style={styles.titleText}>
            DASHBOARD
          </Text>
        </View>
    );
  }
  // <MapView
  //   provider={ PROVIDER_GOOGLE }
  //   initialRegion={this.state}
  //   style={styles.map}
  //   showsCompass={true}
  // />


}

var styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#fff'
   },
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
  map: {
    width: null,
    height: 300,
    flex: 1
    }
});

module.exports = MapScreen;
