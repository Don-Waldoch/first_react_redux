import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      document.getElementById('doItem').value = ''
      return { items: [...state.items, action.payload] }
    },
    removeOne: (state, action) => {
      let array = [...state.items]
      let index = action.payload
      array.splice(index, 1)
      return { items: array }
    },
    clearTodo: (state, action) => {
      return { items: [] }
    }
  }
})

export const { addTodo, removeOne, clearTodo } = todoSlice.actions
export default todoSlice.reducer
