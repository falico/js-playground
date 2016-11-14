import { generateUUID } from '../common/utils'

const todos = [
  {
    id: generateUUID(),
    text: 'Pick oranges',
    completed: false
  },
  {
    id: generateUUID(),
    text: 'Read the news',
    completed: true
  },
  {
    id: generateUUID(),
    text: 'Mow the lawn',
    completed: false
  },
  {
    id: generateUUID(),
    text: 'Buy bread',
    completed: true
  }
]

export default todos;
