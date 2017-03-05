
import { h, Component } from 'preact'
import ConnectedDashboard from '../containers/ConnectedDashboard'
import Dashboard from './Dashboard'


export default function Application() {
  return h('div', { class: 'grid-container' },
    h(Dashboard, {})
  )
}
