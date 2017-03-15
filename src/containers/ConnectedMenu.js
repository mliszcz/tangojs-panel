
import { connect } from 'preact-redux'
import * as actions from '../actions'
import Menu from '../components/Menu'

const mapStateToProps = (state) => {
  return {
    isToggled: state.menu.isToggled
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleClick: (isToggled) => {
      dispatch(actions.menuToggle(isToggled))
    },
    onAddWidget: (models) => {
      dispatch(actions.widgetSelectorOpen(models))
    }
  }
}

const ConnectedMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default ConnectedMenu
