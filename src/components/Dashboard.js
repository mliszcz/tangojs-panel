
import { h, Component } from 'preact'
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function generateDOM(widgets) {
  return widgets.map((widget, i) => {
    return h('div', { key: `${i}` },
      h(widget.tag, widget.attributes))
  })
}

export default class Dashboard extends Component {

  static get defaultProps() {
    return {
      className: "tjp-dashboard layout",
      rowHeight: 30,
      onLayoutChange: function() {},
      onBreakpointChange: function() {},
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      widgets: [],
      layouts: { lg: [] }
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      mounted: false,
    }
  }

  componentDidMount() {
    this.setState({
      mounted: true
    })
  }

  render() {
    return h(
      ResponsiveReactGridLayout,
      Object.assign({}, this.props, {
        // verticalCompact: false, // TODO: make configurable by user
        measureBeforeMount: false,
        useCSSTransforms: this.state.mounted
      }),
      generateDOM(this.props.widgets))
  }
}
