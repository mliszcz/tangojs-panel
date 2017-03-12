
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

const INITIAL_LAYOUTS = { lg: [], md: [], sm: [], xs: [], xxs: [] }

export function layouts(layouts = INITIAL_LAYOUTS, action) {

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

export function menu(menu = { isToggled: false }, action) {

  switch (action.type) {

    case ACTION_TYPE.UI_TOGGLE_MENU:
      return Object.assign({}, menu, { isToggled: action.isToggled })

  }

  return menu
}

const WIDGET_SELECTOR_STATE = {
  isOpen: false,
  models: []
}

export function widgetSelector(widgetSelector = WIDGET_SELECTOR_STATE, action) {

  switch (action.type) {

    case ACTION_TYPE.UI_OPEN_WIDGET_SELECTOR:
      console.log('open widget selector delivered')
      return {
        isOpen: true,
        models: action.models
      }

    case ACTION_TYPE.UI_CLOSE_WIDGET_SELECTOR:
      return {
        isOpen: false,
        models: []
      }

  }

  return widgetSelector
}
