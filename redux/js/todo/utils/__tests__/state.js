import * as state from '../state'
import localStorageMock from '../../__mocks__/localStorage'

describe('state persistance', () => {
  beforeEach(() => {
    window.localStorage = localStorageMock;
  })

  it('should return a state value from local storage if it exists', () => {
    localStorage.setItem('state', JSON.stringify({a: 1, b: 2}))
    expect(state.loadState()).toEqual({a: 1, b: 2})
    // Reset state
    localStorage.clear()
  })

  it('should return undefined if an initial state has not been persisted', () => {
    expect(state.loadState()).toEqual(undefined)
  })

  it('should return undefined if there is an error retrieving the state', () => {
    localStorage = null;  // Invalidate local storage
    expect(state.loadState()).toEqual(undefined)
  })

  it('should persist a state in local storage', () => {
    state.saveState({a: 1, b: 2})
    expect(state.loadState()).toEqual({a: 1, b: 2})
  })

  it('should return false if the state cannot be saved', () => {
    // Mocked values
    localStorage = null;
    console.error = jest.fn();

    const saved = state.saveState({a: 1, b: 2})
    expect(console.error).toHaveBeenCalled()
    expect(saved).toEqual(false)
  })

})
