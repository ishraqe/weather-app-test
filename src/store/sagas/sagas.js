import axios from 'axios';
import {call, put, takeEvery } from 'redux-saga/effects';
import {API_KEY} from '../../configs';
import {
    GET_WEATHER_DATA,
    GET_WEATHER_SUCCESS
} from '../actions/types';


export function* getCitiesWeatherData() {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=${API_KEY}`;
        const response = yield call(axios.get, apiUrl);
        yield put({
            type: GET_WEATHER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        console.log('request failed', error);
    }
    
}

export function* watchGetWeatherList() {
    yield takeEvery(GET_WEATHER_DATA, getCitiesWeatherData);
}

export default function* rootSaga () {
    yield [
        watchGetWeatherList(),
    ]
}