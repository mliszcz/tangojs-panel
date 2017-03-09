
import { h, Component } from 'preact'
import Menu from './Menu'
import ConnectedDashboard from '../containers/ConnectedDashboard'

const PAGE_WRAP_ID = 'burger-menu-page-wrap'
const OUTER_CONTAINER_ID = 'burger-menu-outer-container'

export default function Application() {
  return h('div', { id: OUTER_CONTAINER_ID },
    h(Menu, { pageWrapId: PAGE_WRAP_ID, outerContainerId: OUTER_CONTAINER_ID }),
    h('div', { id: PAGE_WRAP_ID, class: 'grid-container' },
      h(ConnectedDashboard, {})
    )
  )
}
