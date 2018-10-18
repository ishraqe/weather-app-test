import React from 'react';
import {Text, StyleSheet} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Initial from './screens/InitialScreen';
import Home from './screens/Home/Home';
import WeatherDetail from './screens/WeatherDetail/WeatherDetail';

import {
  navFontSize,
  primaryFontColor,
  fontFamily,
  appBackgroundColor
} from './globalStyles';
 
const navigationStyles =StyleSheet.create( {
  title: {
    fontSize: navFontSize,
    color: appBackgroundColor,
    fontFamily: fontFamily,
    textAlign: 'center',
    alignSelf: 'center'
  },
  headerStyle: {
    backgroundColor: primaryFontColor,
    flex:1
  }
});

export const Navigation = createStackNavigator({
  Initial: {
    screen: Initial,
    navigationOptions: {
      header: null,
    }
  },
  Home: { 
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerStyle: navigationStyles.headerStyle,
      headerTitle: <Text style={navigationStyles.title}>Home</Text>,
      headerLeft : null,
      headerRight: null,
    })
  },
  WeatherDetail: {
      screen: WeatherDetail
  }
},{
  initialRouteName: 'Home'
});

