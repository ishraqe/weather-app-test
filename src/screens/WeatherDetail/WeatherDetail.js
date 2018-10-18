import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Weather extends Component {
    
    componentDidMount() {
        this.props.navigation.setParams('Weather');
    }
    render() {
        return (
            <View>
                <Text>Weather</Text>
            </View>
        )
    }
}