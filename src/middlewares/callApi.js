import {SUCCESS, FAIL} from '../constants'

export default store => next => action => {
    const {callApi, onSuccess, method, type, ...rest} = action;

    next(action);

    if (callApi) {
        const opt = method === 'post' ?
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: method,
                body: JSON.stringify(rest)
            } : {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: method
            };

        setTimeout(() => {
            fetch(callApi, opt)
                .then(response => {
                    if (response.status !== 200 || !response.ok) {
                        catchError(response)
                    }
                    return response.json();
                })
                .then(response => {
                    next({type: type + SUCCESS, response})
                    onSuccess && onSuccess(store, next, response)
                })
                // .then(...) as you need more
                .catch(error => {
                    console.error(error)
                    next({type: type + FAIL, error})
                    onSuccess && onSuccess(error)
                })
        }, 1000);
    }
}

const catchError = (error) => {
    const {status, statusText, url} = error
    const trouble = (`${status}  ${statusText}  ${url}`)
    throw new Error(trouble)
}
