
function Enum(...literals) {
  return Object.freeze([...literals].reduce((acc, e) => (acc[e] = e, acc), {}))
}

export const ACTION_TYPE = Enum(
  'WIDGET_ADD',
  'WIDGET_REMOVE',
  'LAYOUT_UPDATE',
  'LAYOUT_BREAKPOINT_UPDATE',
  'UI_TOGGLE_MENU',
  'UI_OPEN_WIDGET_SELECTOR',
  'UI_CLOSE_WIDGET_SELECTOR'
)

export function addWidget(tag, attributes, position) {
  return {
    type: ACTION_TYPE.WIDGET_ADD,
    tag,
    attributes,
    position
  }
}

export function removeWidget(index) {
  return {
    type: ACTION_TYPE.WIDGET_REMOVE,
    index
  }
}

export function updateLayouts(layouts) {
  return {
    type: ACTION_TYPE.LAYOUT_UPDATE,
    layouts
  }
}

export function updateLayoutBreakpoint(breakpoint) {
  return {
    type: ACTION_TYPE.LAYOUT_BREAKPOINT_UPDATE,
    breakpoint
  }
}

export function toggleMenu(isToggled) {
  return {
    type: ACTION_TYPE.UI_TOGGLE_MENU,
    isToggled
  }
}

export function openWidgetSelector(models) {
  return {
    type: ACTION_TYPE.UI_OPEN_WIDGET_SELECTOR,
    models
  }
}

export function closeWidgetSelector() {
  return {
    type: ACTION_TYPE.UI_CLOSE_WIDGET_SELECTOR
  }
}
