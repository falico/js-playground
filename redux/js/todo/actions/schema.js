import { Schema, arrayOf } from 'normalizr'

export const todo = new Schema('todos')
export const array_todo = arrayOf(todo)
