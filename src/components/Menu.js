
import { h, Component } from 'preact'

const DEFAULT_PROPS = {
  onAddWidget: function() {},
  onToggleClick: function() {},
  isToggled: false
}

export default function Menu(props = DEFAULT_PROPS) {

  const toggleClass = props.isToggled ? 'tjp-toggled' : ''

  const onToggleClick = () => props.onToggleClick(!props.isToggled)

  return h('div', { class: 'tjp-menu' },
    h('button',
      {
        type: 'button',
        class: `btn btn-secondary tjp-menu-toggle ${toggleClass}`,
        onClick: onToggleClick
      },
      h('i', { class: 'material-icons' }, 'menu')
    ),
    h('div', { class: 'tjp-device-tree-block' },
      h('h2', {}, 'TangoJS Panel'),
      h('div', { class: 'btn-toolbar', role: 'toolbar' },
        h('div', { class: 'btn-group', role: 'group' },
          h('button', { type: 'button', class: 'btn btn-primary' },
            h('i', { class: 'material-icons' }, 'library_add')),
          h('button', { type: 'button', class: 'btn btn-secondary' },
            h('i', { class: 'material-icons' }, 'check_box_outline_blank')),
          h('button', { type: 'button', class: 'btn btn-secondary' },
            h('i', { class: 'material-icons' }, 'autorenew'))
        )
      ),
      h('tangojs-device-tree', {})
    )
  )
}
