
import { render, h } from 'preact'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'preact-redux'
import * as actions from './actions'
import * as reducers from './reducers'

import Application from './components/Application'

const store = createStore(combineReducers(reducers))

function generateLayout() {
  return [...Array(25).keys()].map((item, i) => {
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: Math.floor(Math.random() * 5 ) * 2 % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  })
}

function generateWidgets() {
  return [...Array(25).keys()].map((i) => {
    return {
      tag: 'input',
      attributes: {
        type: 'text',
        value: `${i}`
      },
      position: { w: 2, h: 2 }
    }
  })
}

generateWidgets().map(w => {
  store.dispatch(actions.addWidget(w.tag, w.attributes, w.position))
})

// function addWidget(text) {
//   store.dispatch(actions.addWidget('input', {
//     type: 'text',
//     value: text
//   }, { x: 0, y: 0, w: 0, h: 0}))
// }
//
// addWidget('first')
// addWidget('second')

render(
  h(Provider, { store }, h(Application, {})),
  document.getElementById('root'))
