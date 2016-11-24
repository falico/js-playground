import todos from '../__mocks__/todos'
import * as utils from '../common/utils'

const time = 500;

export const fetchTodos = (filter) =>
  utils.serverDelay(time).then(() => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(t => !t.completed);
      case 'completed':
        return todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodo = (text) =>
  utils.serverDelay(time).then(() => {
      const todo = {
        id: utils.generateUUID(),
        text,
        completed: false
      }
      todos.push(todo);
      return todo;
    });

export const toggleTodo = (id) =>
  utils.serverDelay(time).then(() => {
      const todo = todos.find(t => t.id === id);
      todo.completed = !todo.completed;
      return todo;
    });
