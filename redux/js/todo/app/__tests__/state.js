import * as State from '../state'
import localStorageMock from '../../__mocks__/localStorage'

describe('App State', () => {

  beforeEach(() => {
    window.localStorage = localStorageMock;
  })

  afterEach(() => {
    localStorage && localStorage.clear();
  })

  it('should return a state value from local storage if it exists', () => {
    localStorage.setItem('state', JSON.stringify({a: 1, b: 2}))
    expect(State.load()).toEqual({a: 1, b: 2})
  })

  it('should return undefined if an initial state has not been persisted', () => {
    expect(State.load()).toEqual(undefined)
  })

  it('should return undefined if there is an error retrieving the state', () => {
    localStorage = null;  // Invalidate local storage
    expect(State.load()).toEqual(undefined)
  })

  it('should persist a state in local storage', () => {
    State.save({a: 1, b: 2})
    expect(State.load()).toEqual({a: 1, b: 2})
  })

  it('should return false if the state cannot be saved', () => {
    // Preserve values
    const errorFn = console.log;

    // Mock values
    localStorage = null;
    console.error = jest.fn();

    const saved = State.save({a: 1, b: 2})
    expect(console.error).toHaveBeenCalled()
    expect(saved).toEqual(false)

    // Restore original value
    console.error = errorFn;
  })

})
