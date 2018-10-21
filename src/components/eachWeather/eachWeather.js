import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const eachWeather = (props) => {
    
    const {name,coords,main, weather} = props.info;
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={
                () => props.navigation.navigate('WeatherDetail', {singleInfo: props.info}) 
            }
        >
            <View style={styles.locationContainer}>
                <Text style={styles.location}>{name}</Text>
                <Text style={styles.weatherType}>{weather[0].main}</Text>
            </View>
            <Text style={styles.temp}>
                {main.temp}  °C
            </Text>
        </TouchableOpacity>
    )
}

export default withNavigation(eachWeather);