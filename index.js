/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'react-saga';

import Reducers from './src/store/reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, applyMiddleware(sagaMiddleware))



AppRegistry.registerComponent(appName, () => 
    <Provider store={store}>
        <App />
    </Provider>
);
