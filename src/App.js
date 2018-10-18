import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Navigation} from './Router';



export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Navigation />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
