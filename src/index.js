
import * as actions from './actions'
import * as reducers from './reducers'

const state = reducers.widgets(undefined, actions.addWidget('div', {}, {}))
