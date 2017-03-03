
import { h } from 'preact'
import Dashboard from './dashboard'

export default function Application() {
  return h('div', {},
    h(Dashboard, { text: 'hello world' })
  )
}
