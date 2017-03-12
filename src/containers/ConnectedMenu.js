
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
      dispatch(actions.toggleMenu(isToggled))
    },
    onAddWidget: (models) => {
      dispatch(actions.openWidgetSelector(models))
    }
  }
}

const ConnectedMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default ConnectedMenu
