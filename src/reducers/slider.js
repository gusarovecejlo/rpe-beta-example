import {fromJS} from 'immutable';
import {
    LOAD_SLIDER,
    SUCCESS,
    FAIL
} from '../constants';

const defaultState = fromJS({
    slides: [],
    load: false,
    error: false
})

export default function (state = defaultState, action) {
    const {type, response} = action;

    switch (type) {
        case LOAD_SLIDER:
            return state
                .set('load', true)
                .set('error', false)
        case LOAD_SLIDER + SUCCESS:
            return state
                .set('slides', response)
                .set('load', false)
        case LOAD_SLIDER + FAIL:
            return state
                .set('load', false)
                .set('error', true)
        default:
            return state
    }
}

