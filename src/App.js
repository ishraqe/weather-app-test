import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Navigation} from './Router';
import { Provider } from 'react-redux';
import Reducers from './store/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas/sagas';
import OneSignal from 'react-native-onesignal';
import Toast from 'react-native-root-toast';
export default class App extends Component {

  componentDidMount() {
    OneSignal.init("090e88e7-65ea-42ab-abb2-50a0ca1ced65");
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    let data = ['ish kiddo'] // some array as payload
    let contents = {
      'en': 'You got notification from user'
    }
    OneSignal.postNotification(contents, data);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
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
