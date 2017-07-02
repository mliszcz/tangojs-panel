
function Enum(...literals) {
  return Object.freeze([...literals].reduce((acc, e) => (acc[e] = e, acc), {}))
}

export const ActionType = Enum(
  'WIDGETS_ADD',
  'WIDGETS_REMOVE',
  'LAYOUTS_UPDATE',
  'BREAKPOINT_UPDATE',
  'MENU_TOGGLE',
  'WIDGET_SELECTOR_OPEN',
  'WIDGET_SELECTOR_CLOSE',
  'WIDGET_SELECTOR_SELECT'
)

export function widgetAdd(tag, attributes, position) {
  return {
    type: ActionType.WIDGETS_ADD,
    tag,
    attributes,
    position
  }
}

export function widgetRemove(index) {
  return {
    type: ActionType.WIDGETS_REMOVE,
    index
  }
}

export function layoutsUpdate(layouts) {
  return {
    type: ActionType.LAYOUTS_UPDATE,
    layouts
  }
}

export function breakpointUpdate(breakpoint) {
  return {
    type: ActionType.BREAKPOINT_UPDATE,
    breakpoint
  }
}

export function menuToggle(isToggled) {
  return {
    type: ActionType.MENU_TOGGLE,
    isToggled
  }
}

export function widgetSelectorOpen(models) {
  return {
    type: ActionType.WIDGET_SELECTOR_OPEN,
    models
  }
}

export function widgetSelectorClose() {
  return {
    type: ActionType.WIDGET_SELECTOR_CLOSE
  }
}

export function widgetSelectorSelect(tag) {
  return {
    type: ActionType.WIDGET_SELECTOR_SELECT,
    tag
  }
}
