import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { 
    primaryFontColor, 
    primaryFontSize, 
    appBackgroundColor ,
    fontFamily
} from '../globalStyles';

class InitialScreen extends Component {
    componentDidMount () {
        setTimeout(()=>{
            this.props.navigation.navigate('Home');
        },5000);
      }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>WeatherApp</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appBackgroundColor
    },
    text: {
        fontSize: primaryFontSize+15,
        fontFamily: fontFamily,
        fontWeight: '600',
        color: primaryFontColor
    }
});

export default InitialScreen;