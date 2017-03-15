
import { connect } from 'preact-redux'
import * as actions from '../actions'
import WidgetSelector from '../components/WidgetSelector'

const mapStateToProps = (state) => {
  return {
    isOpen: state.widgetSelector.isOpen,
    models: state.widgetSelector.models
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddWidget: () => {
      dispatch(actions.widgetSelectorClose())
    },
    onClose: () => {
      dispatch(actions.widgetSelectorClose())
    }
  }
}

const ConnectedWidgetSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetSelector)

export default ConnectedWidgetSelector
