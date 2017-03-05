
import { connect } from 'preact-redux'
import Dashboard from '../components/Dashboard'

// const mapStateToProps = (state) => ({ widgets: state.widgets })
const mapStateToProps = (state) => {
  console.log('widgets: ', state.widgets)
  return { widgets: state.widgets }
}

const ConnectedDashboard = connect(mapStateToProps)(Dashboard)

export default ConnectedDashboard
