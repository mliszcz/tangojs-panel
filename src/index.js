
import { render, h } from 'preact'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'preact-redux'
import * as actions from './actions'
import * as reducers from './reducers'

import Modal from 'react-modal'

import Application from './containers/Application'

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
  store.dispatch(actions.widgetAdd(w.tag, w.attributes, w.position))
})

export function bootstrap(rootElement) {
  Modal.setAppElement(rootElement)
  render(h(Provider, { store }, h(Application, {})), rootElement)
}
