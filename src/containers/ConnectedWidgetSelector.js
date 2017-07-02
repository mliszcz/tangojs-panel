
import { connect } from 'preact-redux'
import * as actions from '../actions'
import WidgetSelector from '../components/WidgetSelector'

const mapStateToProps = (state) => {
  return {
    isOpen: state.widgetSelector.isOpen,
    tag: state.widgetSelector.tag,
    models: state.widgetSelector.models
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddWidget: (tag, attributes) => {
      dispatch(actions.widgetSelectorClose())
      dispatch(actions.widgetAdd(tag, attributes, {w: 3, h: 2}))
    },
    onClose: () => {
      dispatch(actions.widgetSelectorClose())
    },
    onSelectWidget: (tag) => {
      dispatch(actions.widgetSelectorSelect(tag))
    }
  }
}

const ConnectedWidgetSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetSelector)

export default ConnectedWidgetSelector
