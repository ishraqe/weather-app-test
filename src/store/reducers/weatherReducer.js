import {
    GET_WEATHER_SUCCESS,
    GET_USERS_LOCATION_WEATHER
} from '../actions/types';

const INITIAL_STATE = {
    weatherList: null,
    userLocationWeather:  null
};

export default (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case GET_WEATHER_SUCCESS: 
        return {...state, weatherList: actions.payload};
        break;
        case GET_USERS_LOCATION_WEATHER: 
        return {...state, userLocationWeather: actions.payload}
        default:
        return state;
    }
}