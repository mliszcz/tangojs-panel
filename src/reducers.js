
import ACTION_TYPE from './actions'

export function widgets(widgets = {}, action) {

  switch (action.type) {

    case ACTION_TYPE.WIDGET_ADD:
      return Object.assign({}, widgets, {
        action.tag,
        action.attributes,
        action.position
      })

    case ACTION_TYPE.WIDGET_REMOVE:
      return Object.entries(widgets).reduce(
        (acc, [i, e]) => (i === action.index ? acc : (acc[i] = e, acc)),
        {})

    case ACTION_TYPE.WIDGET_MOVE:
      return Object.entries(widgets).reduce(
        (acc, [i, e]) => (i === action.index
          ? (acc[i] = Object.assign({}, widget, { action.position }), acc),
          : acc),
        {})

    case ACTION_TYPE.WIDGET_LOAD:
      return action.widgets

  }

  return widgets
}
