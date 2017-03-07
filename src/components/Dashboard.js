
import { h, Component } from 'preact'
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DEFAULT_PROPS = {
  className: "tjp-dashboard layout",
  rowHeight: 30,
  onLayoutChange: function() {},
  onBreakpointChange: function() {},
  cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
  widgets: [],
  layouts: { lg: [] }
}

export default class Dashboard extends Component {

  static get defaultProps() {
    return DEFAULT_PROPS
  }

  constructor(props) {
    super(props)
    this.state = {
      currentBreakpoint: 'lg',
      mounted: false,
      layouts: this.props.layouts
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true
    })
  }

  generateDOM() {
    return this.props.widgets.map((widget, i) => {
      return h('div', { key: `${i}` },
        h(widget.tag, widget.attributes))
    })
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  onBreakpointChange(breakpoint) {
    console.log('onBreakpointChange')
    // TODO: this seems not needed
    // this.props.onBreakpointChange(breakpoint)
    // /currentBreakpoint
    // this.setState({
    //   currentBreakpoint: breakpoint
    // })
  }

  onLayoutChange(layout, layouts) {
    console.log('onLayoutChange')//, layout, layouts, this.state)
    this.props.onLayoutChange(layout, layouts)
    // this.setState({ layouts })
  }

  render() {

    console.log('render')
    const bind = (fn) => (...a) => fn.call(this, ...a)

    // possible state implementations:
    // 1) internal state, state.layouts passed to component, setState on layout
    // change
    // 2) external state, props.layouts passed to component, redux called on
    // layout change

    // FIXME there is a bug - layout is not remembered after subseqent updates

    const properties = Object.assign({}, this.props, {
      // layouts: this.state.layouts,
      layouts: this.props.layouts,
      onBreakpointChange: bind(this.onBreakpointChange),
      onLayoutChange: bind(this.onLayoutChange),
      measureBeforeMount: false,
      useCSSTransforms: this.state.mounted
    })

    return h(ResponsiveReactGridLayout, properties, this.generateDOM())
  }
}
