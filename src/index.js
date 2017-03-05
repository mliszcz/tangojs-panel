
import { render, h } from 'preact'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'preact-redux'
import * as actions from './actions'
import * as reducers from './reducers'

import Application from './components/Application'

const store = createStore(combineReducers(reducers))

function addWidget(text) {
  store.dispatch(actions.addWidget('input', {
    type: 'text',
    value: text
  }, { x: 0, y: 0, w: 0, h: 0}))
}

addWidget('first')
addWidget('second')

render(
  h(Provider, { store }, h(Application, {})),
  document.getElementById('root'))
