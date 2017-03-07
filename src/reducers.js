
import { ACTION_TYPE } from './actions'
import R from 'ramda'

export function widgets(widgets = [], action) {

  switch (action.type) {

    case ACTION_TYPE.WIDGET_ADD:
      return [...widgets, {
        tag: action.tag,
        attributes: action.attributes
      }]

    case ACTION_TYPE.WIDGET_REMOVE:
      return R.remove(action.index, 1, widgets)

    case ACTION_TYPE.WIDGET_LOAD:
      return action.widgets

  }

  return widgets
}

export function currentBreakpoint(currentBreakpoint = 'lg', action) {

  switch (action.type) {

    case ACTION_TYPE.LAYOUT_BREAKPOINT_UPDATE:
      return action.breakpoint

  }

  return currentBreakpoint
}

export function layouts(layouts = { lg: [] }, action) {

  switch (action.type) {

    case ACTION_TYPE.WIDGET_ADD:
      const layoutEntry = layout => Object.assign({}, action.position, {
        x: 0,
        y: 0,
        i: layout.length.toString(),
        static: false
      })
      return R.map(v => [...v, layoutEntry(v)], layouts)

    case ACTION_TYPE.WIDGET_REMOVE:
      return R.map(v => R.remove(action.index, 1, v))

    case ACTION_TYPE.LAYOUT_UPDATE:
      return action.layouts

  }

  return layouts
}
