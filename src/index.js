import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import * as hst from "history"
import moment from 'moment'
import 'moment/locale/ru'
import store from './store'

import Blog from './containers/blog'

moment.locale('ru')
const history = hst.createHashHistory()

ReactDOM.render(
  <Router history={ history }>
    <Provider store={ store }>

      <Route exact path={'/blog'} component={ Blog } />
      <Route exact path={'/blog/:category'} render={(router) => {
        return <Blog router={router} />
      }}/>

    </Provider>
  </Router>
  ,
  document.getElementById('root')
)
