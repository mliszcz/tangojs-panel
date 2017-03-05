
import { h, Component } from 'preact'
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function generateLayout() {
  return [...Array(25).keys()].map((item, i) => {
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: Math.floor(Math.random() * 5 ) * 2 % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  })
}

const defaultProps = {
    className: "tjp-dashboard layout",
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
    initialLayout: generateLayout()
}

export default class Dashboard extends Component {

  static get defaultProps() {
    return defaultProps
  }

  constructor() {
    super(defaultProps)
    this.state = {
      currentBreakpoint: 'lg',
      mounted: false,
      layouts: {lg: this.props.initialLayout},
    }
  }

  componentWillMount() {
    this.setState({
      currentBreakpoint: 'lg',
      mounted: false,
      layouts: {lg: this.props.initialLayout}
    })
  }

  componentDidMount() {
    this.setState({mounted: true})
  }

  generateDOM() {
    console.log('state ', this.state)
    return this.state.layouts[this.state.currentBreakpoint].map((l, i) => {
      return h('div', { key: `${i}` },
        h('span', { class: 'text' }, `${i}`))
    })
  }

  onBreakpointChange(breakpoint) {
    this.setState({ currentBreakpoint: breakpoint })
  }

  onLayoutChange(layout, layouts) {
    this.props.onLayoutChange(layout, layouts);
  };

  render() {
    const fwd = (fn) => (...a) => fn.call(this, ...a)
    const myprops = Object.assign({}, this.props, {
      layouts: this.state.layouts,
      onBreakpointChange: fwd(this.onBreakpointChange),
      onLayoutChange: fwd(this.onLayoutChange),
      measureBeforeMount: false,
      useCSSTransforms: this.state.mounted
    })
    return h(ResponsiveReactGridLayout, myprops, this.generateDOM())
  }
}
