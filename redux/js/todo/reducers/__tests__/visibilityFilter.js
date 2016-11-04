import todos from '../visibilityFilter'
import { ACTIONS, VisibilityFilters } from '../../actions/constants'

describe('visibilityFilter reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual(VisibilityFilters.SHOW_ALL)
  })

  it('should set a visibility filter', () => {
    expect(
      todos('some filter value', {
        type: ACTIONS.SET_VISIBILITY_FILTER,
        payload: {
          filter: 'new filter value'
        }
      })
    ).toEqual('new filter value')
  })

})
