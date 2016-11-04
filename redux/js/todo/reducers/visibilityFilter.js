import { ACTIONS, VisibilityFilters } from '../actions/constants'

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case ACTIONS.SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter
