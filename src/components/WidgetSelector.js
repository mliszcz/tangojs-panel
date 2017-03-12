
import { h, Component } from 'preact'
import Modal from 'react-modal'

const DEFAULT_PROPS = {
  onAddWidget: function () {},
  onModalClose: function() {},
  isOpen: false,
  models: []
}

export default function WidgetSelector(props = DEFAULT_PROPS) {

  console.log('widget selectorr with props', props)

  const modalProps = {
    isOpen: props.isOpen,
    contentLabel: 'mylabel'
  }

  const btnAddWidgetProps = {
    type: 'button',
    class: 'btn btn-primary',
    onClick: props.onAddWidget
  }

  const btnDismissProps = {
    type: 'button',
    class: 'btn btn-secondary',
    onClick: props.onModalClose
  }

  return h(Modal, modalProps,
    h('span', {}, 'hello world'),
    h('button', btnAddWidgetProps, 'Add'),
    h('button', btnDismissProps, 'Close')
  )
}
