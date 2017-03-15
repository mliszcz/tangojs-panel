
import { connect } from 'preact-redux'
import * as actions from '../actions'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets,
    layouts: state.layouts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLayoutChange: (layout, layouts) => {
      dispatch(actions.layoutsUpdate(layouts))
    },
    onBreakpointChange: (breakpoint) => {
      dispatch(actions.breakpointUpdate(breakpoint))
    }
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default ConnectedDashboard
