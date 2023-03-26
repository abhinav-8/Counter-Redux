import React from 'react'
import {useState} from "react";
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement , incrementByAmount , reset} from './counterSlice'
const Counter = () => {
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch() ;

    const [incrementAmount , setIncrementAmount] = useState(0) ;

    let addValue = Number(incrementAmount) || 0 ;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br/>
      <br/>

      <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmount(addValue))}>Enter value</button>
      <br/>
      <br/>
        
        <button onClick={() => resetAll()}>reset</button>
    </div>
  )
}

export default Counter
