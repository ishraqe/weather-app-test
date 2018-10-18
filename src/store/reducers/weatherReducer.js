import {TEST} from '../actions/types';

const INITIAL_STATE = {
    test: ''
};

export default (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case TEST: 
        console.log(actions);
        return {...state, test: actions.payload};
        break;
        default:
        return state;
    }
}