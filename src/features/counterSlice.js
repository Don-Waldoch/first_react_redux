import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeByAmount: (state, action) => {
      return { value: state.value + action.payload }
    }
  }
})

export const { changeByAmount } = counterSlice.actions
export default counterSlice.reducer
