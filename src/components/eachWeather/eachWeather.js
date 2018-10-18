import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const eachWeather = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.locationContainer}>
                <Text style={styles.location}>Dhaka</Text>
                <Text style={styles.weatherType}>cloudy</Text>
            </View>
            <Text style={styles.temp}>
                25.c
            </Text>
        </View>
    )
}

export default eachWeather;