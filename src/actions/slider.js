import {LOAD_SLIDER} from "../constants"

export function getSlider(opt) {
    return (dispatch) => {
        dispatch({
            type: LOAD_SLIDER,
            callApi: `/api/blog/carousel`,
            method: 'get',
            ...opt
        })
    }
}
