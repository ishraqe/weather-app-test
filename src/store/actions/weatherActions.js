import {
    GET_WEATHER_DATA,
    GET_WEATHER_SUCCESS,
    GET_USERS_LOCATION,
    GET_USERS_LOCATION_WEATHER
} from './types';


export const getWeatherOfCities = () => {
    return {
        type: GET_WEATHER_DATA
    }
}

export const getUsersWeather = () => {
    return {
        type: GET_USERS_LOCATION
    }
}