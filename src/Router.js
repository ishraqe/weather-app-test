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
    alignSelf: 'center',
    flex:1
  },
  headerStyle: {
    backgroundColor: primaryFontColor
  }
});

export const Navigation = createStackNavigator({
  Initial: {
    screen: Initial,
    navigationOptions: {
      header: null,
      headerLeft : null,
      headerRight: null,
    }
  },
  Home: { 
    screen: Home,
    navigationOptions: {
      headerLeft : null,
      headerRight: null,
    }
  },
  WeatherDetail: {
    screen: WeatherDetail
  }
},{
  initialRouteName: 'Initial',
  navigationOptions: ({navigation}) => ({
    headerStyle: navigationStyles.headerStyle,
    headerTitle: <Text style={navigationStyles.title}>WeatherApp</Text>,
    headerTintColor: 'white'
  })
});

