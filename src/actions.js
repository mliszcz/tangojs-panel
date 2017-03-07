
function Enum(...literals) {
  return Object.freeze([...literals].reduce((acc, e) => (acc[e] = e, acc), {}))
}

export const ACTION_TYPE = Enum(
  'WIDGET_ADD',
  'WIDGET_REMOVE',
  'LAYOUT_UPDATE',
  'LAYOUT_BREAKPOINT_UPDATE')

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
