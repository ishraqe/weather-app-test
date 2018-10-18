import {
    TEST
} from './types';

import {takeEvery} from 'redux-saga/effects';

export const _test = () => {
    console.log('inside');
    return {
        type: 'TEST',
        payload: 'hello'
    };
}

export function* watchNumber () {
    yield takeEvery(TEST, watchtest);
}