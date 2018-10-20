import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import { getWeatherOfCities } from '../../store/actions';
import styles from './styles';
import Eachweather from '../../components/eachWeather/eachWeather'

class Home extends Component {
   
    state = {
        weatherList: null
    }

    componentDidMount() {
        this.props.testData();
        
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.cityList !== prevState.weatherList) {
            return {
                weatherList: nextProps.cityList.list
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
            </View>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return {
        cityList: weather.weatherList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        testData: () => dispatch(getWeatherOfCities())
    };
}


export default  connect(mapStateToProps, mapDispatchToProps)(Home);