export const fetchTodos = () => new Promise(resolve => resolve([
  {
    id: 1,
    text: 'Pick oranges',
    completed: false
  },
  {
    id: 2,
    text: 'Read the news',
    completed: true
  }
]));
