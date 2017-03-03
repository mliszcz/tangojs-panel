
import { render, h } from 'preact'
import { createStore, combineReducers } from 'redux'
import * as actions from './actions'
import * as reducers from './reducers'

import Application from './components/application'

const store = createStore(combineReducers(reducers))

render(h(Application, {}), document.getElementById('root'))
