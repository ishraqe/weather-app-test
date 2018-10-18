import {GET_WEATHER_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    weatherList: null
};

export default (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case GET_WEATHER_SUCCESS: 
        console.log(actions.payload, 'red');
        return {...state, weatherList: actions.payload};
        break;
        default:
        return state;
    }
}