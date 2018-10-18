import {
    GET_WEATHER_DATA,
    GET_WEATHER_SUCCESS
} from './types';


export const getWeatherOfCities = () => {
    return {
        type: GET_WEATHER_DATA
    }
}