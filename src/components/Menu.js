
import { h, Component } from 'preact'

const DEFAULT_PROPS = {
  onAddWidget: function() {}
}

export default function Menu(props = DEFAULT_PROPS) {

  return h('div', {},
    h('i', { class: 'material-icons' }, 'menu'),
    h('div', { class: 'device-tree-block' },
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
