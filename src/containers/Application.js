
import { h, Component } from 'preact'
import ConnectedMenu from './ConnectedMenu'
import ConnectedDashboard from './ConnectedDashboard'

export default function Application() {
  return h('div', { class: 'tjp-application' },
    h(ConnectedMenu, {}),
    h(ConnectedDashboard, {})
  )
}
