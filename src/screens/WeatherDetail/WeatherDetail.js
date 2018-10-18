import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import MapView from 'react-native-maps';
import {connect} from 'react-redux';
import styles from './styles';

class Weather extends Component {
    render() {
        console.log(this.props, 'weather page');
        return (
            <View style={styles.conatiner}>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        >
                    </MapView>
                </View>
                <View style={styles.descriptionContainer}>
                    <View style={styles.description}>
                        <Text style={styles.locationName}>Washington</Text>
                        <Text style={styles.weather}>Clear Sky</Text>
                        <Text style={styles.weather}>Humidity Sky</Text>
                        <Text style={styles.weather}>Wind Speed Sky</Text>
                        <Text style={styles.weather}>Max Temp Sky</Text>
                        <Text style={styles.weather}>Min Temp Sky</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Text style={styles.iconText}>25deg</Text>
                        <Image
                            style={styles.icon}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(null,null)(Weather);