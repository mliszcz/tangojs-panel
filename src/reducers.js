
import { ActionType as A } from './actions'
import R from 'ramda'

export function widgets(widgets = [], action) {

  switch (action.type) {

    case A.WIDGETS_ADD:
      return [...widgets, {
        tag: action.tag,
        attributes: action.attributes
      }]

    case A.WIDGETS_REMOVE:
      return R.remove(action.index, 1, widgets)
  }

  return widgets
}

export function breakpoint(breakpoint = 'lg', action) {

  switch (action.type) {

    case A.BREAKPOINT_UPDATE:
      return action.breakpoint
  }

  return breakpoint
}

const INITIAL_LAYOUTS = { lg: [], md: [], sm: [], xs: [], xxs: [] }

export function layouts(layouts = INITIAL_LAYOUTS, action) {

  switch (action.type) {

    case A.WIDGETS_ADD:
      const layoutEntry = layout => Object.assign({}, action.position, {
        x: 0,
        y: 0,
        i: layout.length.toString(),
        static: false
      })
      return R.map(v => [...v, layoutEntry(v)], layouts)

    case A.WIDGETS_REMOVE:
      return R.map(v => R.remove(action.index, 1, v))

    case A.LAYOUTS_UPDATE:
      return action.layouts
  }

  return layouts
}

export function menu(menu = { isToggled: false }, action) {

  switch (action.type) {

    case A.MENU_TOGGLE:
      return Object.assign({}, menu, { isToggled: action.isToggled })
  }

  return menu
}

const INITIAL_WIDGET_SELECTOR = {
  isOpen: false,
  tag: undefined,
  models: []
}

export function widgetSelector(widgetSelector = INITIAL_WIDGET_SELECTOR, action) {

  switch (action.type) {

    case A.WIDGET_SELECTOR_OPEN:
      return {
        isOpen: true,
        tag: undefined,
        models: action.models
      }

    case A.WIDGET_SELECTOR_CLOSE:
      return {
        isOpen: false,
        tag: undefined,
        models: []
      }

    case A.WIDGET_SELECTOR_SELECT:
      return {
        isOpen: true,
        tag: action.tag,
        models: widgetSelector.models
      }
  }

  return widgetSelector
}
