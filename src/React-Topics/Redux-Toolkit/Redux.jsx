import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './features/counterslice'



const Redux = () => {
    const[amount, setAmount] = useState(0);

    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();

function handleIncrement() {
    dispatch(increment());
    
}

function handleDecrement() {
    dispatch(decrement());
   
}
function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
}



  return (
    <div>
      Redux Toolkit
      <button onClick={handleIncrement}>+</button>
      <p>count:{count}</p>
      <button onClick={handleDecrement}>-</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncAmountClick}>Inc by amount </button>
    </div>
  );
}

export default Redux
