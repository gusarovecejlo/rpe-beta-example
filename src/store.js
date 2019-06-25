import {applyMiddleware, createStore} from "redux"
import thunk from 'redux-thunk'
import { Iterable } from 'immutable'
import { createLogger } from 'redux-logger'
import reducers from "./reducers"
import callApi from "./middlewares/callApi"

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    stateTransformer: (state) => {
      const newState = {}

      for (const i of Object.keys(state)) {
        if (Iterable.isIterable(state[i])) {
          newState[i] = state[i].toJS()
        } else {
          newState[i] = state[i]
        }
      }

      return newState
    },
    collapsed: true
  })

  middlewares.push(logger)
}


const store = createStore(reducers, {}, applyMiddleware(thunk, callApi, ...middlewares));
window.store = store

export default store;
