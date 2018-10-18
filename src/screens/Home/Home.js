import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import { _test } from '../../store/actions';

class Home extends Component {

    componentDidMount() {
        this.props.testData();
    }
    render() {
        return (
            <View>
                <Text style={{fontFamily: 'Roboto-Light', color: 'red'}}>Home</Text>
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