import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeByAmount } from './features/counterSlice'

// To be used inside of our Counter component:
function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [ input, setInput ] = useState(0)

  const byAmountSubmit = (e) => {
    e.preventDefault()
    dispatch(changeByAmount(Number(input)))
  }
    
  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={() => dispatch(changeByAmount(1))}>
        Increment
      </button>
      <button onClick={() => dispatch(changeByAmount(-1))}>
        Decrement
      </button>
      <form onSubmit={(e) => byAmountSubmit(e)}>
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Counter
