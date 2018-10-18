import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import { _test } from '../../store/actions';
import styles from './styles';
import Eachweather from '../../components/eachWeather/eachWeather'

class Home extends Component {

    componentDidMount() {
        this.props.testData();
    }
    render() {
        return (
            <View style={styles.container}>
                <Eachweather />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        testData: () => dispatch(_test())
    };
}


export default  connect(null, mapDispatchToProps)(Home);