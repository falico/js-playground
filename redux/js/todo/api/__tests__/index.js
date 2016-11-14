import * as API from '../index'

describe('API', () => {

  jest.useFakeTimers();

  it('should return all todos when the filter value is "all"', () => {
    const promise = API.fetchTodos('all');
    jest.runAllTimers();
    return promise.then(todos => {
      expect(todos.length).toEqual(4);
    });
  })

  it('should return only active todos when the filter value is "active"', () => {
    const promise = API.fetchTodos('active');
    jest.runAllTimers();
    return promise.then(todos => {
      expect(todos.length).toEqual(2);
      expect(todos.filter(t => !t.completed).length).toEqual(2);
    });
  })

  it('should return only completed todos when the filter value is "completed"', () => {
    const promise = API.fetchTodos('completed');
    jest.runAllTimers();
    return promise.then(todos => {
      expect(todos.length).toEqual(2);
      expect(todos.filter(t => t.completed).length).toEqual(2);
    });
  })
})
