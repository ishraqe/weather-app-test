import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home/Home';
import WeatherDetail from './screens/WeatherDetail';


export const Navigation = createStackNavigator({
  Home: { screen: Home },
  WeatherDetail: {
      screen: WeatherDetail
  }
});

