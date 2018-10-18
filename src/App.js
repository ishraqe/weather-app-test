import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Navigation} from './Router';
import { Provider } from 'react-redux';
import Reducers from './store/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


export default class App extends Component {
  render() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(Reducers, applyMiddleware(sagaMiddleware))
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
