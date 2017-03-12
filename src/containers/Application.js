
import { h, Component } from 'preact'
import { default as Menu } from './ConnectedMenu'
import { default as Dashboard } from './ConnectedDashboard'
import { default as WidgetSelector } from './ConnectedWidgetSelector'

export default function Application() {
  return h('div', { class: 'tjp-application' },
    h(Menu, {}),
    h(Dashboard, {}),
    h(WidgetSelector, {})
  )
}
