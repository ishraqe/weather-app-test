import axios from 'axios';
import {call, put, takeEvery } from 'redux-saga/effects';
import {API_KEY} from '../../configs';
import {
    GET_WEATHER_DATA,
    GET_WEATHER_SUCCESS,
    GET_USERS_LOCATION,
    GET_USERS_LOCATION_WEATHER
} from '../actions/types';


export function* getCitiesWeatherData() {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&units=metric&appid=${API_KEY}`;
        const response = yield call(axios.get, apiUrl);
        yield put({
            type: GET_WEATHER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        console.log('request failed', error);
    }
    
}
const getUserLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        location => resolve(location),
        error => reject(error),
        {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 10000
        }
    )
});

export function* getUsersWeather () {
    try {
        const location = yield call(getUserLocation);
        const {latitude, longitude} = location.coords;
        const getWeatherAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        const response = yield call(axios.get, getWeatherAPI);
        yield put({
            type: GET_USERS_LOCATION_WEATHER,
            payload: response.data
        });
    } catch (e) {
        // handle errors
    }
}


export function* userCurrentWeather () {
    yield takeEvery(GET_USERS_LOCATION, getUsersWeather)
}

export function* watchGetWeatherList() {
    yield takeEvery(GET_WEATHER_DATA, getCitiesWeatherData);
}

export default function* rootSaga () {
    yield [
        watchGetWeatherList(),
        userCurrentWeather()
    ]
}