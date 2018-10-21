import React, {Component} from 'react';
import { StyleSheet, Text, View, AppState} from 'react-native';
import {Navigation} from './Router';
import { Provider } from 'react-redux';
import Reducers from './store/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas/sagas';



export default class App extends Component {
  render() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(Reducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
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
