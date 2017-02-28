
function Enum(...literals) {
  return Object.freeze([...literals].reduce((acc, e) => (acc[e] = e, acc), {}))
}

export const ACTION_TYPE = Enum(
  'WIDGET_ADD',
  'WIDGET_REMOVE',
  'WIDGET_MOVE',
  'WIDGET_LOAD')

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

export function moveWidget(index, position) {
  return {
    type: ACTION_TYPE.WIDGET_MOVE,
    index,
    position
  }
}

export function loadWidgets(widgets) {
  return {
    type: ACTION_TYPE.WIDGET_LOAD,
    widgets
  }
}
