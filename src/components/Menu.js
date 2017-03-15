
import { h, Component } from 'preact'

const DEFAULT_PROPS = {
  onAddWidget: function() {},
  onToggleClick: function() {},
  isToggled: false
}

function button(icon, props) {
  return h('button', props, h('i', { class: 'material-icons' }, icon))
}

export default function Menu(props = DEFAULT_PROPS) {

  const toggleClass = props.isToggled ? 'tjp-toggled' : ''

  const onToggleClick = () => props.onToggleClick(!props.isToggled)

  let tangojsDeviceTree = null

  const btnToggleProps = {
    type: 'button',
    class: `btn btn-secondary tjp-menu-toggle ${toggleClass}`,
    onClick: () => props.onToggleClick(!props.isToggled)
  }

  const btnAddWidgetProps = {
    type: 'button',
    class: 'btn btn-primary',
    onClick: () => {
      const models = tangojsDeviceTree.getSelections().map(e => e.value)
      props.onAddWidget(models)
    }
  }

  const btnClearTreeProps = {
    type: 'button',
    class: 'btn btn-secondary',
    onClick: () => 0
  }

  const btnReloadTreeProps = {
    type: 'button',
    class: 'btn btn-secondary',
    onClick: () => 0
  }

  return h('div', { class: 'tjp-menu' },
    button('menu', btnToggleProps),
    h('div', { class: 'tjp-device-tree-block' },
      h('h2', {}, 'TangoJS Panel'),
      h('div', { class: 'btn-toolbar', role: 'toolbar' },
        h('div', { class: 'btn-group', role: 'group' },
          button('library_add', btnAddWidgetProps),
          button('check_box_outline_blank', btnClearTreeProps),
          button('autorenew', btnReloadTreeProps)
        )
      ),
      h('tangojs-device-tree', { ref: e => tangojsDeviceTree = e })
    )
  )
}
