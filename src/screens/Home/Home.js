import React, {Component} from 'react';
import {View, Text, FlatList, AppState} from 'react-native';
import {connect} from 'react-redux';
import PushNotification from 'react-native-push-notification';
import PushController from '../../PushController'; 

import { getWeatherOfCities, getUsersWeather } from '../../store/actions';
import styles from './styles';
import Eachweather from '../../components/eachWeather/eachWeather'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherList: null,
            usersWeather: null
        };
    };
    componentDidMount() {
        this.props.getuserLocationWeather();
        this.props.getWeathersList();
    }
    handlePushNotification = () => {
        console.log('out')
        const hours = new Date().getHours();
        const isDayTime = hours > 6 && hours < 20;
        if(isDayTime) {
            if(this.state.usersWeather) {
                const {main} = this.state.usersWeather;
                PushNotification.localNotificationSchedule({
                    message: `Current temparature is ${main.temp} °C`, // (required)
                    date: new Date(Date.now() + (3 * 1000)) // in 3 secs
                });    
            }
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.cityList !== prevState.weatherList ) {
            return {
                weatherList: nextProps.cityList.list,
                usersWeather:  nextProps.currentWeather
            };
        }
        return null;
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.weatherList}
                    renderItem={({ item }) => (
                        <Eachweather 
                            info={item}
                        />
                    )}
                />
                {this.handlePushNotification()}
                <PushController />
            </View>
        )
    }
}

const mapStateToProps = ({weather}) => {
    console.log(weather);
    return {
        cityList: weather.weatherList,
        currentWeather: weather.userLocationWeather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeathersList: () => dispatch(getWeatherOfCities()),
        getuserLocationWeather: () => dispatch(getUsersWeather())
    };
}


export default  connect(mapStateToProps, mapDispatchToProps)(Home);