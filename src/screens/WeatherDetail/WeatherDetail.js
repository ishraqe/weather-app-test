import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import MapView,{ Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import styles from './styles';

class Weather extends Component {
    state = {
        singlePlaceInfo: null
    }
    componentDidMount () {
        const { singleInfo } = this.props.navigation.state.params;
        this.setState({
            singlePlaceInfo: singleInfo
        });
    }
    renderInfo = () => {
        if(this.state.singlePlaceInfo) {
            const { coord, name, main, weather, wind } = this.state.singlePlaceInfo;
            return (
                <View style={{flex:1}}>
                     <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            region={{
                                latitude: coord.lat,
                                longitude: coord.lon,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            >
                            <Marker
                                coordinate= {{ 
                                    latitude: coord.lat,
                                    longitude: coord.lon
                                }}
                                title={name}
                            />
                        </MapView>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.description}>
                            <Text style={styles.locationName}>{name}</Text>
                            <Text style={styles.weather}>{weather[0].description}</Text>
                            <Text style={styles.weather}>Humidity {main.humidity}</Text>
                            <Text style={styles.weather}>Wind Speed {wind.speed}</Text>
                            <Text style={styles.weather}>Max Temp {main.temp_max}</Text>
                            <Text style={styles.weather}>Min Temp {main.temp_min}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Text style={styles.iconText}>{main.temp}</Text>
                            <Image
                                style={styles.icon}
                                source={{uri: `http://openweathermap.org/img/w/${weather[0].icon}.png`}}
                            />
                        </View>
                        </View>
                </View>
            )
        }
        return (
            <Text>Loading !!</Text>
        )
    }
    render() {
        return (
            <View style={styles.conatiner}>
                {this.renderInfo()}
            </View>
        )
    }
}

export default connect(null,null)(Weather);